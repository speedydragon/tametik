import React from 'react'

// import images
import Ms_Saeede_Taromi from "../../images/Ms_Saeede_Taromi.png"
import Ms_Reyhaneh_Faizi from "../../images/Ms_Reyhaneh_Faizi.png"
import Ms_Elaheh_Ahmadi from "../../images/Ms_Elaheh_Ahmadi.png"
import Ms_Zahra_Dhurgham from "../../images/Ms_Zahra_Dhurgham.png"

const Teamworking = () => {
    return (
        <div className="h-auto xs:mx-24 mx-10 mt-16.25 bg-[#FBFBFB] rounded-2lg">
            <div className="flex justify-center pt-10">
                <span className="halflg:text-4.5xl xs:text-3xl text-xl font-medium transition200">غربالگری آنلاین کودک</span>
            </div>

            {/** the cards are going down below: */}
            <div className="gridContainer grid halflg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 mt-16 px-11 pb-16">
                
                <div /** sigle card */>
                    <div /** image */ className="overflow-hidden rounded-2lg shadow-md  h-[250px] transition200">
                        <img src={Ms_Reyhaneh_Faizi}  alt="Ms_Reyhaneh_Faizi" className="w-full h-full object-cover transition200" />
                    </div>
                    <div /** text */ className="mt-4">
                        <p className="font-medium text-sm text-center">ریحانه فیضی</p>
                        <p className="font-medium text-sm text-center mt-2">کارشناس ارشد مشاوره</p>
                    </div>
                </div>
               
                <div /** sigle card */>
                    <div /** image */ className="overflow-hidden rounded-2lg shadow-md h-[250px] transition200">
                        <img src={Ms_Saeede_Taromi}  alt="Ms_Saeede_Taromi" className="w-full h-full object-cover transition200" />
                    </div>
                    <div /** text */ className="mt-4">
                        <p className="font-medium text-sm text-center">سعیده طارمی</p>
                        <p className="font-medium text-sm text-center mt-2">کارشناس ارشد مشاوره</p>
                    </div>
                </div>

                <div /** sigle card */>
                    <div /** image */ className="overflow-hidden rounded-2lg shadow-md  h-[250px]">
                        <img src={Ms_Elaheh_Ahmadi}  alt="Ms_Elaheh_Ahmadi" className="w-full h-full object-cover" />
                    </div>
                    <div /** text */ className="mt-4">
                        <p className="font-medium text-sm text-center">الهه احمدی</p>
                        <p className="font-medium text-sm text-center mt-2">کارشناس ارشد مشاوره</p>
                    </div>
                </div>

                <div /** sigle card */>
                    <div /** image */ className="overflow-hidden rounded-2lg shadow-md h-[250px]">
                        <img src={Ms_Zahra_Dhurgham}  alt="Ms_Zahra_Dhurgham" className="halflg: w-full h-full object-cover" />
                    </div>
                    <div /** text */ className="mt-4">
                        <p className="font-medium text-sm text-center">زهرا ضرغام</p>
                        <p className="font-medium text-sm text-center mt-2">کارشناس ارشد مشاوره</p>
                    </div>
                </div>

                <div /** sigle card */ className="">
                    <div /** image */ className="overflow-hidden rounded-2lg shadow-md  h-[250px]">
                        <img src={Ms_Saeede_Taromi}  alt="saeede_taromi" className="w-full h-full object-cover" />
                    </div>
                    <div /** text */ className="mt-4">
                        <p className="font-medium text-sm text-center">سعیده طارمی</p>
                        <p className="font-medium text-sm text-center mt-2">کارشناس ارشد مشاوره</p>
                    </div>
                </div>

                
            </div>
        </div>
     );
}
 
export default Teamworking;