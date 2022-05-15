import React, { useState } from 'react';
import SignupContainar from '../form/SignupContainar';
import background from '../../images/tametikChild.png'

const Signin = () => {

    const [modalOpen, setModalOpen] = useState(false);


    return ( 


        <div className="sm:mx-24">

            <div style={{ backgroundImage: `url(${background})`}} 
                className="transition200 h-120 bg-no-repeat md:bg-[length:100%_125%] sm:bg-[length:100%_125%] bg-[length:100%_100%] mt-6 flex flex-col halflg:justify-start halflg:items-start items-center sm:rounded-lg">
                    
                <div className="halflg:pt-10 halflg:pr-6 pt-24">
                <p className="font-bold halflg:text-4.75xl sm:text-4xl text-2xl transition200 text-white">غربالگری آنلاین کودک</p>
                <p className="font-bold halflg:text-4.75xl sm:text-4xl text-2xl transition200 text-white sm:pt-6 halflg:pr-28 sm:pr-24 pt-1 pr-16">با تمشک</p>
                </div>
        
                <div className="halflg:pr-32 sm:mt-8 mt-3">
                <button className="sm:w-42 sm:h-12 w-36 h-9 bg-none shadow sm:py-3 sm:px-7 py-1 px-2 bg-booking text-white hover:bg-bookingDark rounded-lg sm:text-sm text-xs transition200" onClick={() => {setModalOpen(true);}}>ثبت نام در غربالگری</button>
                {modalOpen && <SignupContainar setOpenModal={setModalOpen} />}
                </div>

            </div>

        </div> 


    // <div className="mx-24">

    //     <div style={{ backgroundImage: `url(${background})`}} 
    //     className="transition200 h-120 bg-no-repeat md:bg-[length:100%_125%] sm:bg-[length:100%_110%] mt-6 flex flex-col halflg:justify-start halflg:items-start items-center rounded-2lg">
    //             <div className="halflg:pt-10 halflg:pr-6 pt-24">
    //             <p className="font-bold halflg:text-4.75xl text-4xl transition200 text-white">غربالگری آنلاین کودک</p>
    //             <p className="font-bold halflg:text-4.75xl text-4xl transition200 text-white pt-6 halflg:pr-28 pr-24">با تمشک</p>
    //             </div>
                
    //             <div className="halflg:pr-32 mt-8">
    //             <button className="w-42 h-12 shadow py-3 px-7 bg-booking text-white hover:bg-bookingDark border-none rounded-lg text-sm transition200" onClick={() => {setModalOpen(true);}}>ثبت نام در غربالگری</button>
    //             {modalOpen && <SignupContainar setOpenModal={setModalOpen} />}
    //             </div>
    //     </div>

    // </div>


    );
}
 
export default Signin;