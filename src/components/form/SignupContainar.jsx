import React, { useState } from "react";
import SigninForm from "./SigninForm";
import Codepage from "./Codepage";


function SignupContainar() {

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
            return <SigninForm page={page} setPage={setPage} data={data} setData={setData} />;
        } else {
            return <Codepage data={data} setPage={setPage} />;
        }
    }

  return (
    <div className="fixed flex justify-center items-center z-10">
            <div className="w-110 h-fit rounded-3xl bg-white shadow-2xl flex flex-col p-6 border border-solid border-silver">

                {PageDisplay()}

            </div>
    </div>
  )
}

export default SignupContainar