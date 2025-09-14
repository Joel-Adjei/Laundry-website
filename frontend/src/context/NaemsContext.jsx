import { orders } from '@/data/data';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

const NaemsContext = createContext();

export const NaemsContextProvider = ({ children }) => {
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
    const [message, setMessage] = useState({
        status: "",
        text: ""
    });
    const [resetForm, setResetForm] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [loading, setLoading] = useState(false);

    function endLoading() {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    // items selected (changed to useRef)
    const totalItems = useRef([]);

    // bookings made
    const [bookings, setBookings] = useState(orders);

    const updateBookingStatus = (bookingId, newStatus) => {
        setBookings(bookings.map(booking =>
            booking.id === bookingId ? { ...booking, status: newStatus } : booking
        ));
    };

    // add items
    const addItem = (newItem) => {
        const checkItem = totalItems.current.find(({ id }) => id === newItem.id);
        if (checkItem) {
            alert("Items already chosen");
            return;
        }
        totalItems.current = [newItem, ...totalItems.current];
    };

    const removeItem = (item) => {
        totalItems.current = totalItems.current.filter(({ id }) => id !== item.id);
        console.log(totalItems.current);
        console.log(totalItems.current.length);
    };

    const itemStatus = (item, status) => {
        if (status === "add") {
            addItem(item);
        } else {
            removeItem(item);
        }
    };

    const totalPrice = () => {
        return totalItems.current.reduce((total, item) => total + item.totalPrice, 0);
    };

    const updatePrice = (id, newPrice, quantity) => {
        totalItems.current = totalItems.current.map(item =>
            item.id === id ? { ...item, totalPrice: newPrice, count: quantity } : item
        );
        console.log(totalItems.current);
    };

    const resetItems =()=>{
        totalItems.current = []
    }

    useEffect(() => {
        endLoading();
    }, [loading]);

    return (
        <NaemsContext.Provider value={{
            itemStatus,
            totalItems: totalItems.current,
            totalPrice,
            updatePrice,
            bookings,
            loading,
            formData,
            setFormData,
            message,
            setMessage,
            resetItems,
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
    );
};

export const useNaems = () => useContext(NaemsContext);