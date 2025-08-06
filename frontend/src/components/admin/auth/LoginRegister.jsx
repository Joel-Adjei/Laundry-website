import React, {useEffect, useState} from 'react';
import { Mail, Lock, User, Loader2 } from 'lucide-react';
import * as Yup from "yup"
import {Formik , Form, Field , ErrorMessage} from "formik";
import {useAuth} from "@/context/AuthContext";
import {useNavigate} from "react-router";
import Loading from "@/components/Loading";
import SolidButton from "@/components/primary/Buttons/SolidButton";

// Main application component
export default function LoginRegister() {
  const navigator = useNavigate()
  const { isLogin , user , token , message , setMessage , handleAuthSuccess , handleLogout, toggleView} = useAuth()

  useEffect(()=> {
    user && navigator("/admin/dashboard");
  })
  if (user) {
    navigator("/admin/dashboard");
    return <Loading />
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          {/*<Laundry size={64} className="text-blue-600" />*/}
        </div>
        <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
           Welcome Back!
        </h1>
        <p className="text-center text-slate-600 mb-6">
          Log in to manage your bookings'
        </p>

        {message && (
          <div className={`p-3 mb-4 rounded-lg text-sm font-medium ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

          <LoginForm onAuthSuccess={handleAuthSuccess} setMessage={setMessage} />

      </div>
    </div>
  );
}

// Login form component
const LoginForm = ({ onAuthSuccess, setMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate()

    const inputStyle = "w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"

    const initialValues = {
        email : "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        email : Yup.string().email().required().label("Email"),
        password : Yup.string().required().min(8).label("Email"),
    })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        onAuthSuccess(data.token, data.user);
        navigator("/admin/dashboard" , {replace: true})
      } else {
        setMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('An error occurred during login. Please check the server connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} >
          {
              ()=>(
                  <Form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <Field
                              id={"email"}
                              name={"email"}
                              type={"email"}
                              className={inputStyle}
                          />
                          <ErrorMessage name={"email"} component="div" className="text-red-300 text-sm mt-1"   />
                      </div>
                      <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <Field
                              type="password"
                              placeholder="Password"
                              name={"password"}
                              required
                              className={inputStyle}
                          />
                        <ErrorMessage name={"password"} component="div" className="text-red-300 text-sm mt-1"   />
                      </div>
                      <SolidButton
                          type="submit"
                          disabled={isLoading}
                          className="w-full flex items-center justify-center bg-green-800 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-700 transition duration-300 shadow-lg disabled:bg-green-300"

                          title={"Login"}
                        />
                  </Form>
              )
          }
      </Formik>
  );
};
