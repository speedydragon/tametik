import React, { useState } from "react";
import SigninForm from "./SigninForm";
import Codepage from "./Codepage";


function SignupContainar({setOpenModal}) {

    const [page, setPage] = useState(0);

    const [data, setData] = useState({
        name: "",
        // email: "",
        phoneNum: "",
        password: "",
        confirmPassword: "",
    });

    const PageDisplay = () => {
        if (page === 0) {
            return <SigninForm page={page} setPage={setPage} data={data} setData={setData} setOpenModal={setOpenModal} />;
        } else {
            return <Codepage data={data} setPage={setPage} setOpenModal={setOpenModal} />;
        }
    }

  return (
    <div className="fixed flex justify-center items-center w-[100%] h-[100%] bg-[rgba(0,0,0,0.8)] z-20">
            <div className="xs:w-110 xs:h-fit w-screen h-screen xs:rounded-3xl bg-white shadow-2xl flex flex-col p-6 border border-solid border-silver">

                {PageDisplay()}

            </div>
    </div>
  )
}

export default SignupContainar