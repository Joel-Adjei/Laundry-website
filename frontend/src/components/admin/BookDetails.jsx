import React from "react";

const BookDetails = ({ booking, onClose, onStatusUpdate }) => {
    if (!booking) return null;

    return (
        <div className="fixed inset-0 bg-gray-700/40 backdrop-blur-md flex items-center justify-center px-7 shadow-lg z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-screen overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Booking Details - {booking.id}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Customer Information</h3>
                        <p><strong>Name:</strong> {booking.customerName}</p>
                        <p><strong>Email:</strong> {booking.email}</p>
                        <p><strong>Phone:</strong> {booking.phone}</p>
                        <p><strong>Address:</strong> {booking.address}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Service Details</h3>
                        <p><strong>Service:</strong> {booking.service}</p>
                        <p><strong>Amount:</strong> ${booking.amount.toFixed(2)}</p>
                        <p><strong>Pickup Date:</strong> {booking.pickupDate}</p>
                        <p><strong>Delivery Date:</strong> {booking.deliveryDate}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Items</h3>
                    <ul className="list-disc list-inside">
                        {booking.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Special Instructions</h3>
                    <p className="bg-gray-50 p-2 rounded">{booking.specialInstructions}</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Update Status</h3>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onStatusUpdate(booking.id, 'pending')}
                            className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => onStatusUpdate(booking.id, 'in-progress')}
                            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                        >
                            In Progress
                        </button>
                        <button
                            onClick={() => onStatusUpdate(booking.id, 'completed')}
                            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                        >
                            Completed
                        </button>
                        <button
                            onClick={() => onStatusUpdate(booking.id, 'cancelled')}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                        >
                            Cancelled
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails
