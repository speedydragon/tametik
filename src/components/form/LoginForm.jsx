import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';

import { validate } from './validate';
import { notify } from "./toast"

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "login"))
    }, [data, touched])

    const changeHandler = event => {
       
      setData({ ...data, [event.target.name]: event.target.value })
        
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You login successfully", "success")
        } else {
            notify("Invalid data!", "error")
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

  return (
    <div className="fixed flex justify-center items-center z-10">

    <form onSubmit={submitHandler} className="w-110 h-fit rounded-3xl bg-white shadow-2xl flex flex-col p-6 border border-solid border-silver">

        <h2 className="text-left mb-10 text-3xl text-blue-700">LogIn</h2>

        <div className="formField">
             <input placeholder='ایمیل' type="text" className={(errors.email && touched.email) ? "uncompleted" : "formInput" } name="email"  value={data.email} onChange={changeHandler} onFocus={focusHanlder}/>
             {errors.email && touched.email && <span className="errorSpan">{errors.email}</span>}
        </div>

        <div className='formField'>
             <input placeholder='رمز عبور' type="password" className={(errors.password && touched.password) ? "uncompleted" : "formInput" } name="password"  value={data.password} onChange={changeHandler} onFocus={focusHanlder}/>
             {errors.password && touched.password && <span className="errorSpan">{errors.password}</span>}
        </div>

        <div className="flex justify-around items-center mt-4">
            
            <a href="#" className="text-blue-600 transition-all duration-200 ease-in font-bold hover:text-blue-700">sign Up</a>
            
            <button type="submit" className="bg-blue-700 px-7 py-3 text-white rounded border-none text-sm font-medium text-center transition-all duration-200 ease-in hover:bg-blue-600">Login</button>
        
        </div>
    </form>
    <ToastContainer/>
    </div>
  )
}

export default LoginForm