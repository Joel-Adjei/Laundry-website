import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useNaems } from "@/context/NaemsContext";
import OutlineButton from "@/components/primary/Buttons/OutlineButton";
import mtn from "../../assets/images/mtn-logo.jpg"
import { ArrowLeftIcon } from "lucide-react";
import PayementProcess from "./PaymentProcess";
import usePageTile from "@/hooks/usePageTitle";

const Payment = () => {
  const navigate = useNavigate();
  const { formData, totalPrice ,resetItems, setResetForm, message, setFormData , setMessage } = useNaems();
  const [paymentMethod, setPaymentMethod] = useState("MTN MoMo"); // Default payment method
  const [isVisible , setIsVisible] = useState(false)
  usePageTile("Payment")

  useEffect(()=>{
    console.log(formData)
    const booking = localStorage.getItem("booking")
    setFormData(JSON.parse(booking))
    console.log(formData)
  },[])

  // Define initial values for Formik
  const initialValues = {
    paymentMethod: paymentMethod,
    paymentPhoneNumber: "", // Phone number for payment
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    paymentMethod: Yup.string().required("Payment method is required"),
    paymentPhoneNumber: Yup.string()
      .matches(/^[0-9+]{8,15}$/, "Invalid phone number format")
      .required("Payment phone number is required"),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    const payload = {
      ...values,
      amount: (totalPrice() / 2).toFixed(2), // 50% deposit
    };

    try {
      console.log("Payment Payload:", payload);

      // Simulate successful payment
      setTimeout(() => {
        setResetForm(true);
        resetItems()
        localStorage.removeItem("booking")
      }, 7000);

      setIsVisible(true)

    } catch (error) {
      console.error("Payment Error:", error);
      setMessage({status:"error" ,text:"An error occurred during payment."});
    } finally {
      setSubmitting(false);
      setMessage("")
    }
  };

  if(formData.name == ''){
    return null
  }

  return (
    <>
    <div className="z-60 fixed top-0 w-full h-[100vh] p-4 flex items-center justify-center gap-2 bg-slate-300/30 backdrop-blur-sm">
      
    
    <div className={"relative w-full  h-[95vh] md:h-[90vh] flex flex-col md:flex-row gap-4 p-0 md:border bg-gray-50 border-green-500 rounded-xl overflow-auto"}>
      

      {/* Review Section */}
      <div className="md:flex-1 bg-gray-100 p-6 rounded-lg shadow-md md:overflow-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Review Your Booking</h2>
        <div className="space-y-3">

          <div className="bg-gray-200 rounded-md space-y-2">
            <p className="w-full font-bold text-slate-600 bg-gray-300 px-3 ">Info</p>
            <div className="px-2">
              <span className="font-bold text-gray-700">Full Name:</span>{" "}
              <span className="text-gray-600">{formData.name}</span>
            </div>
            <div className="px-2">
              <span className="font-bold text-gray-700">Hall of Residence:</span>{" "}
              <span className="text-gray-600">{formData.locationDetail}</span>
            </div>
            <div className="px-2">
              <span className="font-bold text-gray-700">Room Number:</span>{" "}
              <span className="text-gray-600">{formData.roomNumber}</span>
            </div>
            <div className="px-2">
              <span className="font-bold text-gray-700">Telephone Number:</span>{" "}
              <span className="text-gray-600">{formData.phoneNumber}</span>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md">
            <p className="w-full font-bold text-slate-600 bg-gray-300 px-3 ">Selected Items</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-600">
              {formData.selectedItems.map((item, index) => (
                  <li key={index} className="px-2">
                    {item.label} - {item.totalPrice.toFixed(2)}
                    <p>Quantity - {item.count === 0? 1 : item.count}</p>
                  </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-200 rounded-md">
            <p className="w-full font-bold text-slate-600 bg-gray-300 px-3 ">Special Instructions</p>
            <p className="p-3">{formData.instructions}</p>
          </div>

          <div className="w-full flex border border-slate-500 mb-3">
            <p className=" flex-1 font-bold text-gray-700 p-2 border-r border-slate-500 ">Total Cost:</p>{" "}
            <p className="text-gray-600 p-2">GHS {totalPrice().toFixed(2)}</p>
          </div>
        </div>

      </div>

      {/* Payment Form */}
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
            <Form className="space-y-5 bg-green-50 p-6 rounded-lg shadow-md">

              <div>
                <span className="font-bold text-gray-700">Deposit (50%):</span>{" "}
                <span className="text-gray-600">GHS {(totalPrice() / 2).toFixed(2)}</span>
              </div>
              
              <h2 className="text-md font-semibold text-green-800 mb-4">Select Payment Method</h2>
              <div className="flex justify-center gap-4">
                <div
                    className={`p-4 border rounded-lg cursor-pointer  ${
                        values.paymentMethod === "MTN MoMo" ? "border-green-500 bg-green-50" : "border-gray-300"
                    }`}
                    onClick={() => setFieldValue("paymentMethod", "MTN MoMo")}
                >
                  <img src={mtn} className="size-12" />
                  <p className="mt-2 font-semibold">MTN MoMo</p>
                </div>
                <div
                    className={`p-4 border rounded-lg cursor-pointer ${
                        values.paymentMethod === "Telcel Cash" ? "border-green-500 bg-green-50" : "border-gray-300"
                    }`}
                    onClick={() => setFieldValue("paymentMethod", "Telcel Cash")}
                >
                  <p className="mt-2 font-semibold">Telcel Cash</p>
                </div>
              </div>
              <ErrorMessage name="paymentMethod" component="div" className="text-red-500 text-sm mt-3 text-center" />

              {/* Payment Phone Number */}
              <div>
                <label htmlFor="paymentPhoneNumber" className="block text-sm font-medium text-green-800 mb-1">
                  Payment Phone Number
                </label>
                <Field
                    type="tel"
                    id="paymentPhoneNumber"
                    name="paymentPhoneNumber"
                    className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-200 ease-in-out"
                    placeholder="Eg. +233 24 123 4567"
                />
                <ErrorMessage name="paymentPhoneNumber" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <OutlineButton
                  type="submit"
                  disabled={isSubmitting}
                  title={isSubmitting ? "Processing..." : "Confirm Payment"}
                  className="mx-auto text-green-700 py-3 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </Form>
        )}
      </Formik>

          
    <OutlineButton
      className={"md:absolute bottom-2 right-2 m-4  text-sm px-2 flex flex-row-reverse gap-2 items-center justify-center "}
      onClick={()=> navigate(-1)}
      title={"Go back to booking"}
      logo={<ArrowLeftIcon />}
    />
    </div>

    </div>

    {isVisible && <PayementProcess data={paymentMethod} />}
    </>
  );
};

export default Payment;