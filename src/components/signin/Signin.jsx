import React, { useState } from 'react';

import SignupContainar from '../form/SignupContainar';

const Signin = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return ( 
    <div className="w-full h-110 bg-red-900 mt-6 flex justify-center items-end">
        <button className="btn" onClick={() => {setModalOpen(true);}}>ثبت نام در غربالگری</button>
        {modalOpen && <SignupContainar setOpenModal={setModalOpen} />}
    </div> );
}
 
export default Signin;