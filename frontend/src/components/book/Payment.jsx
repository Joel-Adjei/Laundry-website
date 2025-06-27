import React, {useState , useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import {useNaems} from "@/context/NaemsContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Payment =()=>{
    const navigator = useNavigate()

    const { formData , resetForm , setFormData , message , setMessage } = useNaems();


    const initialPaymentValues = {
        mobileMoneyNumber: '',
        network: '',
    };

    // Validation schema for the payment form step using Yup
    const paymentValidationSchema = Yup.object().shape({
        mobileMoneyNumber: Yup.string()
            .matches(/^[0-9+]{8,15}$/, 'Invalid mobile money number format')
            .required('Mobile Money Number is required'),
        network: Yup.string().required('Network is required'),
    });


    // Handle payment submission
    const handlePaymentSubmit = (values, { setSubmitting }) => {


        setMessage('Payment processing... Please confirm the transaction on your phone.');
        setSubmitting(true)
        try{
            console.log(values)
            setTimeout(() => {
                setMessage('Your 50% deposit has been received! Your order is confirmed.');
                setSubmitting(false)
                navigator("/book")
                resetForm()
            }, 3000); // 3 seconds delay for simulation

        }catch (e) {
            console.log( "error :", e)
            setMessage('An error, please try again');
            setSubmitting(false)
        }

    };


    // Mobile Money Networks
    const mobileMoneyNetworks = ['MTN', 'Telecel', 'AirtelTigo'];


    return (
        <div className={"z-60 w-full h-[100dvh] fixed top-0 left-0 flex items-center justify-center bg-gray-300/70"}>
        <div className="p-3">
            <h2 className="text-2xl font-bold bg-green-800 p-4 rounded-t-xl text-green-100 text-center">Payment Details</h2>

            <Formik
                initialValues={initialPaymentValues}
                validationSchema={paymentValidationSchema}
                onSubmit={handlePaymentSubmit}
            >
                {({ values: paymentValues, isSubmitting }) => (
                    <Form className="bg-green-50 p-6 pt-0 rounded-b-xl shadow-inner border border-green-200">

                        <p className="text-center text-lg mb-6 text-gray-700">
                            A 50% deposit of{' '}
                            <span className="font-extrabold text-3xl text-green-600">
                    GHS {(formData.price / 2).toFixed(2)} {/* Use price from the submitted form data */}
                  </span>{' '}
                            is required to confirm your order.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="mobileMoneyNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile Money Number
                                </label>
                                <Field
                                    type="tel"
                                    id="mobileMoneyNumber"
                                    name="mobileMoneyNumber"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-200 ease-in-out placeholder-gray-400"
                                    placeholder="Eg. 024xxxxxxx or +23324xxxxxxx"
                                />
                                <ErrorMessage name="mobileMoneyNumber" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="network" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile Money Network
                                </label>
                                <Field
                                    as="select"
                                    id="network"
                                    name="network"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-200 ease-in-out"
                                >
                                    <option value="">Select Network</option>
                                    {mobileMoneyNetworks.map((network) => (
                                        <option key={network} value={network}>
                                            {network}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="network" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Processing Payment...' : `Pay GHS ${(formData.price / 2).toFixed(2)}`}
                            </button>
                            <button
                                type="button"
                                onClick={() => navigator(-1)}
                                className="w-full mt-3 bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300 ease-in-out"
                            >
                                Back to Order Form
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
        </div>
    )
}

export default Payment