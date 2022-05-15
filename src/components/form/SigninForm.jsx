import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';
import axios from 'axios';


import { validate } from './validate';
import { notify } from "./toast"



const SigninForm = ({setPage , data , setData , setOpenModal}) => {


    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data, touched])

    const changeHandler = event => {
        
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const postNumber = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {body: {client_phoneNumber : data.phoneNum}})
                .then(response => console.log(response.data))
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            postNumber()

            notify("! کد تایید برای شماره وارد شده ارسال شد", "success")

            setPage(prevpage => prevpage + 1)

        } else {
            notify("! اطلاعات وارد شده نا معتبر است", "error")
            setTouched({
                name: true,
                // email: true,
                phoneNum : true,
                password: true,
                confirmPassword: true,
            })
        }
    }

  return (
    <div>

    <form onSubmit={submitHandler} >
        
        <div className='flex justify-between'>

            <h2 className="mb-10 text-3xl text-booking">ثبت نام</h2>

            <div onClick={setOpenModal} className="mt-1 h-fit cursor-pointer text-xl hover:bg-neutral-300 shadow-inner hover:shadow-none bg-neutral-100 rounded transition200 " >
                <span className='px-2 py-1 font-thin text-slate-700 hover:text-black'>X</span>
            </div>
        </div>

        <div className="nameContainer">

        <div className='formField'>
             <input placeholder='نام و نام خانوادگی *' type="text" className={(errors.name && touched.name) ? "uncompleted" : "formInput" } name="name"  value={data.name} onChange={changeHandler} onFocus={focusHanlder}/>
             {errors.name && touched.name && <span className="errorSpan">{errors.name}</span>}
        </div>
        
        </div>

        {/* <div className="formField">
             <input placeholder="ایمیل" type="text" className={(errors.email && touched.email) ? "uncompleted" : "formInput" } name="email"  value={data.email} onChange={changeHandler} onFocus={focusHanlder}/>
             {errors.email && touched.email && <span className="errorSpan">{errors.email}</span>}
        </div> */}

        <div className="formField">
             <input placeholder="شماره تلفن همراه *" type="number" className={(errors.phoneNum && touched.phoneNum) ? "uncompleted" : "formInput" } name="phoneNum"  value={data.phoneNum} onChange={changeHandler} onFocus={focusHanlder}/>
             {errors.phoneNum && touched.phoneNum && <span className="errorSpan">{errors.phoneNum}</span>}
        </div>

        <div className='formField'>
             <input placeholder='رمز عبور *' type="password" className={(errors.password && touched.password) ? "uncompleted" : "formInput" } name="password"  value={data.password} onChange={changeHandler} onFocus={focusHanlder}/>
             {errors.password && touched.password && <span className="errorSpan">{errors.password}</span>}
        </div>

        <div className="formField">
            <input placeholder='تایید رمز عبور *' type="password" className={(errors.confirmPassword && touched.confirmPassword) ? "uncompleted" : "formInput" } name="confirmPassword"  value={data.confirmPassword} onChange={changeHandler} onFocus={focusHanlder}/>
            {errors.confirmPassword && touched.confirmPassword && <span className="errorSpan">{errors.confirmPassword}</span>}
        </div>

        <div className="flex justify-center mt-10">
                        
            <button type="submit" className="bg-booking w-full py-3 text-white rounded-lg border-none text-sm font-medium text-center transition-all duration-200 ease-in hover:bg-bookingDark">ارسال کد</button>
        
        </div>
    </form>
    <ToastContainer/>
    </div>
  )
}

export default SigninForm