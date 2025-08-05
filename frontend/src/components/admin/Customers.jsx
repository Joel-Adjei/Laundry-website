import React from "react";
import {useNaems} from "@/context/NaemsContext";

const Customers =()=>{
    const {bookings} = useNaems();

    return (
            <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">Customer Management</h2>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...new Set(bookings.map(b => b.customerName))].map((customerName) => {
                            const customerBookings = bookings.filter(b => b.customerName === customerName);
                            const customer = customerBookings[0];
                            const totalSpent = customerBookings.reduce((sum, b) => sum + b.amount, 0);

                            return (
                                <div key={customerName} className="border rounded-lg p-4">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                                            {customerName.charAt(0)}
                                        </div>
                                        <div className="ml-3">
                                            <p className="font-medium text-gray-800">{customerName}</p>
                                            <p className="text-sm text-gray-600">{customer.email}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <p><strong>Total Bookings:</strong> {customerBookings.length}</p>
                                        <p><strong>Total Spent:</strong> ${totalSpent.toFixed(2)}</p>
                                        <p><strong>Phone:</strong> {customer.phone}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
    )
}

export default Customers