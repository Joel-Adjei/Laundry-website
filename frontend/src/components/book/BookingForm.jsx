import React,{useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import {legonHalls , accraCitiesTowns , LaundryItems } from "@/assets/assest";
import {useNaems} from "@/context/NaemsContext"
import OutlineButton from "@/components/primary/Buttons/OutlineButton";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ItemCard from "@/components/book/ItemCard";

const inputStyle = "w-full px-4 py-2 bg-blue-50 text-blue-950 border border-blue-300 rounded-sm  focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out placeholder:italic placeholder-blue-400"

const BookingForm =()=>{
    const navigator = useNavigate()

    const { formData, totalItems, totalPrice , setFormData , resetItems , setMessage } = useNaems();

    const [numOItems, setNumOItems] = useState(totalItems)
    
  useEffect(()=>{
    resetItems()
    setFormData()
  },[])

    useEffect(()=>{
        console.log("Total Items in BookingForm:", totalItems);
    },[totalItems])
    // Initial values for the Formik form
    const initialFormValues = {
        name: '',
        locationDetail: '',
        roomNumber: '',
        phoneNumber: '',
        selectedItems: [],
        instructions: "",
    };


    // Validation schema for the order form step using Yup
    const orderValidationSchema = Yup.object().shape({
        name: Yup.string().required('Full Name is required'),
        locationDetail: Yup.string().required('Hall/City/Town is required'),
        roomNumber: Yup.string().when('location', {
            is: 'Legon UG',
            then: (schema) => schema.required('Room Number is required for Legon UG'),
            otherwise: (schema) => schema.notRequired(),
        }),
        phoneNumber: Yup.string()
            .matches(/^[0-9+]{8,15}$/, 'Invalid phone number format')
            .required('Telephone Number is required'),
        selectedItems: Yup.array()
            .min(1, "Please select at least one item")
            .required("Selected items are required"),
        instructions: Yup.string()
    });

    // Handle initial form submission (move to payment step)
    const handleOrderSubmit = (values, { setSubmitting , resetForm }) => {
        setSubmitting(true)
         console.log('Order Details:', values);
         setFormData(values)
        localStorage.setItem("booking" , JSON.stringify(values) )
        navigator("/book/payment")
        setSubmitting(false);
        setMessage(''); // Clear any previous messages
    
    };

    const handleItemClick = (item, values, setFieldValue) => {
        const selected = [...values.selectedItems];
        const index = selected.findIndex((selectedItem) => selectedItem.id === item.id);
    
        if (index === -1) {
          // Add item if not already selected
          selected.push(item);
        } else {
          // Remove item if already selected
          selected.splice(index, 1);
        }
    
        setFieldValue("selectedItems", selected); // Update Formik state
        console.log("Selected Items:", selected);
      };

    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={orderValidationSchema}
            onSubmit={handleOrderSubmit}
        >
            {({ values, setFieldValue, isSubmitting }) => (
                <Form className="space-y-5">
                    {/* Personal Information Section */}
                    <div className="bg-blue-900 p-5 lg:p-9 rounded-lg text-blue-50">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">
                                Full Name
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className={inputStyle}
                                placeholder="eg. Emmanuel Pinto"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-300 text-sm mt-1" />
                        </div>

                        {/* Location Selection */}
                        {/*<div>*/}
                        {/*    <label htmlFor="location" className="block text-sm font-medium text-blue-200 mb-1 mt-3">*/}
                        {/*        Location*/}
                        {/*    </label>*/}
                        {/*    <Field*/}
                        {/*        as="select"*/}
                        {/*        id="location"*/}
                        {/*        name="location"*/}
                        {/*        className={inputStyle}*/}
                        {/*        onChange={(e) => {*/}
                        {/*            setFieldValue('location', e.target.value);*/}
                        {/*            setFieldValue('locationDetail', ''); // Reset sub-location*/}
                        {/*            setFieldValue('roomNumber', ''); // Reset room number*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        <option value="" className={"text-gray-600"}>Select Location</option>*/}
                        {/*        <option value="Accra" className={"text-gray-600"}>Accra</option>*/}
                        {/*        <option value="Legon UG" className={"text-gray-600"}>Legon UG</option>*/}
                        {/*    </Field>*/}
                        {/*    <ErrorMessage name="location" component="div" className="text-red-300 text-sm mt-1" />*/}
                        {/*</div>*/}

                        {/* Conditional Sub-location Dropdown */}

                            <div>
                                <label htmlFor="locationDetail" className="block text-sm font-medium text-blue-200 mb-1 mt-3">
                                    Hall of Residence
                                </label>
                                <Field
                                    as="select"
                                    id="locationDetail"
                                    name="locationDetail"
                                    className={inputStyle}
                                >
                                    <option value="" className={"text-gray-600"}>Select Hall</option>
                                    {legonHalls.map((hall) => (
                                        <option key={hall} value={hall} className={"text-gray-600"}>
                                            {hall}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="locationDetail" component="div" className="text-red-300 text-sm mt-1" />
                            </div>


                        {/*{values.location === 'Accra' && (*/}
                        {/*    <div>*/}
                        {/*        <label htmlFor="locationDetail" className="block text-sm font-medium text-blue-200 mb-1 mt-3">*/}
                        {/*            City/Town in Accra*/}
                        {/*        </label>*/}
                        {/*        <Field*/}
                        {/*            as="select"*/}
                        {/*            id="locationDetail"*/}
                        {/*            name="locationDetail"*/}
                        {/*            className={inputStyle}*/}
                        {/*        >*/}
                        {/*            <option value="" className={"text-gray-600"}>Select City/Town</option>*/}
                        {/*            {accraCitiesTowns.map((city) => (*/}
                        {/*                <option key={city} value={city}>*/}
                        {/*                    {city}*/}
                        {/*                </option>*/}
                        {/*            ))}*/}
                        {/*        </Field>*/}
                        {/*        <ErrorMessage name="locationDetail" component="div" className="text-red-300 text-sm mt-1" />*/}
                        {/*    </div>*/}
                        {/*)}*/}

                        {/* Room Number (only required for Legon UG) */}

                            <div>
                                <label htmlFor="roomNumber" className="block text-sm font-medium text-blue-200 mb-1 mt-3">
                                    Room Number
                                </label>
                                <Field
                                    type="text"
                                    id="roomNumber"
                                    name="roomNumber"
                                    className={inputStyle}
                                    placeholder="Eg. 101A"
                                />
                                <ErrorMessage name="roomNumber" component="div" className="text-red-300 text-sm mt-1" />
                            </div>


                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-blue-200 mb-1 mt-3">
                                Telephone Number
                            </label>
                            <Field
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                className={inputStyle}
                                placeholder="Eg. +233 24 123 4567"
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="text-red-300 text-sm mt-1" />
                        </div>
                        
                        <div>
                            <label htmlFor="instructions" className="block text-sm font-medium text-blue-200 mb-1 mt-3">
                                Special Instructions
                            </label>
                            <Field
                                type="textArea"
                                id="instructions"
                                name="instructions"
                                className={inputStyle}
                                placeholder=""
                            />
                            <ErrorMessage name="instructions" component="div" className="text-red-300 text-sm mt-1" />
                        </div>
                    </div>

                    {/* Laundry items Selection Section */}
                    <div className="bg-green-50 p-4 lg:p-9 rounded-xl shadow-inner border border-green-200">
                        <h2 className="text-xl font-semibold text-green-800 mb-4">Choose Basket Size</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {LaundryItems.map((item , index) => (
                                <ItemCard key={index} item={item} value={values} setField={setFieldValue} handleSelect={handleItemClick} />
                            ))}
                        </div>
                        <ErrorMessage name="selectedItems" component="div" className="text-red-500 text-sm mt-3 text-center" />

                        {/* Display selected basket and price */}
                        {values.selectedItems && (
                            <div className="mt-5 w-fit mx-auto  text-center text-lg font-semibold p-3 pr-0 bg-gray-100 rounded-sm border border-gray-200">
                                Total Cost: <span className="text-white bg-green-700 p-3 rounded-sm ">GHS {totalPrice().toFixed(2)}</span>
                            </div>
                        )}
                        {!values.selectedItems && (
                            <p className="mt-5 text-center text-green-500 text-sm">Please select a basket size to see the price.</p>
                        )}

                    </div>

                    {/* Submit Button */}
                    <OutlineButton
                        type="submit"
                        disabled={isSubmitting}
                        title={isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                        className="mx-auto text-green-700 py-3 rounded-lg font-semibold text-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </Form>
            )}
        </Formik>
    )

}

export default BookingForm