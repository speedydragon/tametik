import React, { useState , useRef} from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "./toast"
import CountDown from './CountDown';


function Codepage({data , setPage}) {

  const button = useRef(null);

  // useEffect((e) => {
  //   console.log(e.target.innerHTML)
  // }, [])

  const [verificationCode , setverificationCode] = useState({code:""})

  const goBackBTN = () => {
    setPage(prevpage => prevpage -1)
  }


  const changeHandler = event => {
        
    setverificationCode({ ...verificationCode, [event.target.name]: event.target.value })

}

  const finalSubmit = (event) => {
      event.preventDefault();

      if(button.current.innerText === "تایید کد") {
        // console.log(button.current.onsubmit)

        if (verificationCode.code) { 
        
        axios.post('https://jsonplaceholder.typicode.com/posts' , {body : {
        VerificationCode : verificationCode.code,
        Name : data.name,
        Password : data.password,
        client_phoneNumber : data.phoneNum
      }})
    .then(response => {if (response.status === 201) {
      notify("! ثبت نام شما با موفقیت انجام شد", "success")
      console.log(response.data)
    }})
  
    } else {
      notify("! کد تایید خود را وارد نکرده اید", "error")
    }   
      } else if (button.current.innerText === "ارسال مجدد کد") {

        axios.post('https://jsonplaceholder.typicode.com/posts' , {body : {
          client_phoneNumber : data.phoneNum
      }})
      .then(response => console.log(response.data))
      button.current.innerText = "تایید کد"
      
    }
  }

  const onTimesup = () => {
    button.current.innerText = "ارسال مجدد کد"
    notify("فرصت شما تمام شد ! برای ارسال مجدد کد کلیک کنید.", "error")
  }

  return (
    <>
      <form onSubmit={finalSubmit}>
        <div>
          <p className="text-center font-extralight text-sm">کد ارسال شده برای شماره <span className="bg-slate-400 rounded-3xl py-2 px-3 mx-1">{data.phoneNum}</span> را وارد کنید.</p>
        </div>

        <div className="flex justify-center mt-10 mb-3">
          <input className="codeInput" type="number" name="code" value={verificationCode.code} onChange={changeHandler} />
        </div>

        <div className="flex justify-center mt-4">
          <span className="text-lime-600"><CountDown duration={10} onTimesup={onTimesup} /></span>
        </div>

        <div className="mt-10 mb-3 flex justify-around">
          <button type="submit" ref={button} className="border-none rounded-3xl px-11 py-1 text-white bg-lime-600 hover:bg-lime-700 transition-all ease-in-out duration-200 font-extralight text-sm">تایید کد</button>
          <button type="submit" className="border-none rounded-3xl px-4 py-1 bg-gray-200 hover:bg-gray-300 transition-all ease-in-out duration-200 font-extralight text-sm" onClick={goBackBTN}>ویرایش اطلاعات</button>
        </div>
      </form>
      <ToastContainer/>
    </>
  )
}

export default Codepage