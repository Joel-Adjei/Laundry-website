import React, {createContext, useContext, useEffect, useState} from 'react'

const NaemsContext = createContext();

export const NaemsContextProvider=({children})=>{
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        location: '', // New state for main location (Accra/Legon UG)
        locationDetail: '', // New state for hall or city/town
        roomNumber: '',
        phoneNumber: '',
        basketSize: '',
        price: 0,
    });

    // State to manage form submission message or payment confirmation message
    const [message, setMessage] = useState('');
    const [resetForm, setResetForm] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [loading , setLoading] = useState(false);

    function endLoading(){
        setTimeout(()=>{
            setLoading(false)
        } , 2000)
    }

const [bookings, setBookings] = useState([
    {
      id: 'BK001',
      customerName: 'John Smith',
      email: 'john@email.com',
      phone: '+1234567890',
      service: 'Wash & Fold',
      items: ['Shirts: 5', 'Pants: 3', 'Towels: 2'],
      pickupDate: '2024-08-05',
      deliveryDate: '2024-08-07',
      status: 'pending',
      amount: 25.50,
      address: '123 Main St, City, State',
      specialInstructions: 'Handle delicate items with care'
    },
    {
      id: 'BK002',
      customerName: 'Sarah Johnson',
      email: 'sarah@email.com',
      phone: '+1234567891',
      service: 'Dry Cleaning',
      items: ['Suit: 1', 'Dress: 2'],
      pickupDate: '2024-08-04',
      deliveryDate: '2024-08-06',
      status: 'in-progress',
      amount: 45.00,
      address: '456 Oak Ave, City, State',
      specialInstructions: 'Starch on shirts'
    },
    {
      id: 'BK003',
      customerName: 'Mike Wilson',
      email: 'mike@email.com',
      phone: '+1234567892',
      service: 'Wash & Fold',
      items: ['Casual wear: 8 items'],
      pickupDate: '2024-08-03',
      deliveryDate: '2024-08-05',
      status: 'completed',
      amount: 32.75,
      address: '789 Pine St, City, State',
      specialInstructions: 'None'
    },
    {
      id: 'BK004',
      customerName: 'Emily Davis',
      email: 'emily@email.com',
      phone: '+1234567893',
      service: 'Premium Care',
      items: ['Silk blouse: 2', 'Wool coat: 1'],
      pickupDate: '2024-08-06',
      deliveryDate: '2024-08-08',
      status: 'cancelled',
      amount: 65.00,
      address: '321 Elm St, City, State',
      specialInstructions: 'Extra gentle cycle'
    }
  ]);

    const updateBookingStatus = (bookingId, newStatus) => {
        setBookings(bookings.map(booking =>
            booking.id === bookingId ? { ...booking, status: newStatus } : booking
        ));
    };
    



    useEffect(()=>{
        endLoading()
    },[loading])

    return(
        <NaemsContext.Provider value={{
	    bookings,
            loading,
            formData,
            setFormData,
            message,
            setMessage,
            resetForm,
            setResetForm,
            endLoading,
            setLoading,
            setActiveTab,
            updateBookingStatus,
            activeTab,
        }}>
            {children}
        </NaemsContext.Provider>
    )
}

export const useNaems =()=> useContext(NaemsContext);