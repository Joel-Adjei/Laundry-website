import React, { useState, useEffect } from 'react';
import { Calendar, Users, Package, DollarSign, Search, Filter, Eye, Edit, Trash2, CheckCircle, Clock, AlertCircle, Plus } from 'lucide-react';
import {useNaems} from "@/context/NaemsContext";
import {useAuth} from "@/context/AuthContext";
import {useNavigate} from "react-router";
import usePageTile from '@/hooks/usePageTitle';

const LaundryAdminDashboard = () => {
    const navigator = useNavigate();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);
  usePageTile("Dashboard")

  const {bookings, activeTab , updateBookingStatus} = useNaems()
    const {isLogin} = useAuth()

    useEffect(()=>{
        !isLogin && navigator("/admin/auth/login")
        console.log(!isLogin)
    },[])


  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'in-progress': return <AlertCircle className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <Trash2 className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };



  const stats = {
    totalBookings: bookings.length,
    pendingBookings: bookings.filter(b => b.status === 'pending').length,
    inProgressBookings: bookings.filter(b => b.status === 'in-progress').length,
    completedBookings: bookings.filter(b => b.status === 'completed').length,
    totalRevenue: bookings.filter(b => b.status === 'completed').reduce((sum, b) => sum + b.amount, 0)
  };

  

  return (
    <div className="min-h-screen ">


      {/* Main Content */}
      <main className="py-6">
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Bookings</p>
                    <p className="text-2xl font-bold text-gray-800">{stats.totalBookings}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-gray-800">{stats.pendingBookings}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">In Progress</p>
                    <p className="text-2xl font-bold text-gray-800">{stats.inProgressBookings}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-gray-800">${stats.totalRevenue.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b">
                <h2 className="text-lg font-semibold text-green-800">Recent Bookings</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {bookings.slice(0, 5).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{booking.customerName}</p>
                          <p className="text-sm text-gray-600">{booking.service} - ${booking.amount.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Pickup: {booking.pickupDate}</p>
                        <p className="text-sm text-gray-600">Delivery: {booking.deliveryDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

    </div>
  );
};

export default LaundryAdminDashboard;