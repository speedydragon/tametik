import React, { useState } from 'react';
import SignupContainar from '../form/SignupContainar';
import background from '../../images/tametikChild.png'

const Signin = () => {

    const [modalOpen, setModalOpen] = useState(false);


    return ( 



    <div className="px-24">

        <div style={{ backgroundImage: `url(${background})`}} className="h-120 bg-no-repeat bg-[length:100%_125%] shadow mt-6 flex flex-col rounded-2lg">
                <div className="pt-10 pr-6">
                <p className="font-bold text-10xl text-white">غربالگری آنلاین کودک</p>
                <p className="font-bold text-10xl text-white pt-6 pr-28">با تمشک</p>
                </div>
                
                <div className=" pr-32 mt-8">
                <button className="w-42 h-12 shadow py-3 px-7 bg-booking text-white hover:bg-bookingDark border-none rounded-lg text-sm transition-all ease-in duration-200" onClick={() => {setModalOpen(true);}}>ثبت نام در غربالگری</button>
                {modalOpen && <SignupContainar setOpenModal={setModalOpen} />}
                </div>
        </div>

    </div>


    );
}
 
export default Signin;