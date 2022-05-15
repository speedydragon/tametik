import React, { useState , useRef} from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "./toast"
import CountDown from './CountDown';


function Codepage({data , setPage , setOpenModal}) {

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
      <div className="flex justify-end mb-2">
      <div onClick={setOpenModal} className="h-fit w-fit cursor-pointer text-xl hover:bg-neutral-300 shadow-inner hover:shadow-none bg-neutral-100 rounded transition200" >
          <span className='px-2 py-1 font-thin text-slate-700 hover:text-black text-center'>X</span>
      </div>
      </div>
        <div>
          <p className="text-center font-extralight text-sm">کد ارسال شده برای شماره <span className="bg-slate-200 rounded-3xl py-2 px-3 font-black">{data.phoneNum}</span> را وارد کنید.</p>
        </div>

        <div className="flex justify-center mt-10 mb-3">
          <input className="codeInput" type="number" name="code" value={verificationCode.code} onChange={changeHandler} />
        </div>

        <div className="flex justify-center pt-4">
          <span className="text-booking"><CountDown duration={10} onTimesup={onTimesup}/></span>
        </div>

        <div className="mt-8 mb-3 flex justify-around">
          <button type="submit" ref={button} className="border-none rounded-3xl px-9 py-1 text-white bg-booking hover:bg-bookingDark transition200 font-extralight text-sm">تایید کد</button>
          <button type="submit" className="border-none rounded-3xl px-4 py-1 bg-gray-200 hover:bg-gray-300 transition200 font-extralight text-sm" onClick={goBackBTN}>ویرایش اطلاعات</button>
        </div>
      </form>
      <ToastContainer/>
    </>
  )
}

export default Codepage