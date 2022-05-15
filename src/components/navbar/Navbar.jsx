import React,{ useState } from 'react';

const Navbar = () => {

    const [openHam, setOpenHam] = useState(false)

    const hamburgarHandler = () => {
        setOpenHam(!openHam )
    }

    return ( 
        <div className="bg-white sticky top-0 z-50 shadow-md">

            <div className={openHam ? "flex absolute top-[67px] sm:w-1/2 w-4/6 h-screen bg-[rgba(255,255,255,0.72)] backdrop-blur-xl" : "hidden"}>

                <ul className="flex flex-col pr-6 pt-3 pb-3 w-full">
                    <li className="mobileMenuLi transition200">صفحه اصلی</li>
                    <li className="mobileMenuLi transition200">تماس با‌ما</li>
                    <li className="mobileMenuLi transition200">پشتیبانی</li>
                    <li className="mobileMenuLi transition200">ارتباط با‌ما</li>
                    <li className="mobileMenuLi transition200">ورود</li>
                </ul>

                <div onClick={hamburgarHandler} className="pt-6 pl-6">
                  <span className="cursor-pointer text-xl hover:bg-neutral-300 px-2 rounded transition200 ">X</span>
               </div>
               
            </div>

    <header className="sm:px-24 px-8 flex justify-between items-center">

         {/** HAMBURGAR MENU GOES HERE */}

        <div className="block halflg:hidden cursor-pointer" onClick={hamburgarHandler}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000 /svg">
            <path d="M25.3333 22.6667H6.66667C5.196 22.6667 4 23.8627 4 25.3333C4 26.804 5.196 28 6.66667 28H25.3333C26.804 28 28 26.804 28 25.3333C28 23.8627 26.804 22.6667 25.3333 22.6667ZM25.3333 13.3333H6.66667C5.196 13.3333 4 14.5293 4 16C4 17.4707 5.196 18.6667 6.66667 18.6667H25.3333C26.804 18.6667 28 17.4707 28 16C28 14.5293 26.804 13.3333 25.3333 13.3333ZM25.3333 4H6.66667C5.196 4 4 5.196 4 6.66667C4 8.13733 5.196 9.33333 6.66667 9.33333H25.3333C26.804 9.33333 28 8.13733 28 6.66667C28 5.196 26.804 4 25.3333 4Z" fill="#0C0C0C"/>
            </svg>
        </div>


        {/** MORE THAN HALFLG GOES HERE */}

        <div className="flex items-center">

            <div className="logo">
                <svg width="80" height="67" viewBox="0 0 80 67" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="80" height="66.8613" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_189_42" transform="scale(0.00364964 0.00436681)"/>
                </pattern>
                <image id="image0_189_42" width="274" height="229" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEqADAAQAAAABAAAA5QAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8IAEQgA5QESAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAMCBAEFAAYHCAkKC//EAMMQAAEDAwIEAwQGBAcGBAgGcwECAAMRBBIhBTETIhAGQVEyFGFxIweBIJFCFaFSM7EkYjAWwXLRQ5I0ggjhU0AlYxc18JNzolBEsoPxJlQ2ZJR0wmDShKMYcOInRTdls1V1pJXDhfLTRnaA40dWZrQJChkaKCkqODk6SElKV1hZWmdoaWp3eHl6hoeIiYqQlpeYmZqgpaanqKmqsLW2t7i5usDExcbHyMnK0NTV1tfY2drg5OXm5+jp6vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAQIAAwQFBgcICQoL/8QAwxEAAgIBAwMDAgMFAgUCBASHAQACEQMQEiEEIDFBEwUwIjJRFEAGMyNhQhVxUjSBUCSRoUOxFgdiNVPw0SVgwUThcvEXgmM2cCZFVJInotIICQoYGRooKSo3ODk6RkdISUpVVldYWVpkZWZnaGlqc3R1dnd4eXqAg4SFhoeIiYqQk5SVlpeYmZqgo6SlpqeoqaqwsrO0tba3uLm6wMLDxMXGx8jJytDT1NXW19jZ2uDi4+Tl5ufo6ery8/T19vf4+fr/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/2gAMAwEAAhEDEQAAAfSNtW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bN6TFej3JLwXqtU2nS7FvmHInTTFT1vZM+cXwZ37nkj110snvo6bbMdtq20VMaKnTq22rbattq22rRMVDJ7Kjj1dPzfl5FfUd00RjYsGNtWW/LOXbKLjkRv0Kleprtts221bbVo2qJ2pOnUrbVttW21aNq0bVMRz1p0A/MQD1/VD+dd4PPDX2Vfx8F8ncR29nZL8pken6zPFdk3lr0awnaKmNFTExWnTUadW21bbVomKjSmpByHNj1fSPOE69e26PlusPE4JaTeI1b2UZ5MmV1tNaKh6rjL06ntuJSPY9Sc+SWx8n0eG7i8fRphtprbattq22raIqdtUUF/x918ptl+u2yoPvQg2DfK6Yi4JBT0129xKZuNPD90m6PJc/YD67TEhun7Pzr0VvmNpm87battq22rRtWjTW21agtvPL0K/bD6nX1D29w9LHPcsfD7zn+Sw9ZaFXl2z03ncXJ63PlnRny3fEem+ZD0CxGHqdN2Xlfft89b6JvJ22rbattqiJitMTWhUVxfL3lGPrdtrsz9hpNtg+2xt1nJ9bee053qOXn0xh2vGyMU0xp9ZVp7L1RSVH4vbattq22qNE1p2rROrl+K9b48e1ym2vf22rbattqP1HIa5SD2unbOIN9eUcm2w118juW8dxO189ttW21bbVttW21bbVqa55u34bbD7Lbattq2xYC3QUFlG2G22xvQuK7nhz4bHbD3et6/h+5Pym21wbbVttW21bbVttW21Zm8iPk4/ROQH1FVnDe79tg2UlZXuuW63lT4VRpy+9FnWY59FzuNIGX/TWLm+iT8vttZ7bVttW21bbVttW21bbVGnVQcF6l5gPoB5WHsaxr5sui5qMRtsN9to7p+Y9APmXm0n5eJ2jttW21bbVttW21bbVttW21bbVFNc6fzdv6fh6fm1d6b5reiiNh6WdNe8PHx+9Qx8nl+nVrzYnay22rbattFTkzU6NU7attq22rbatGipiYqdpqKq203n4/RNehzvQK1wxO1nttW21bbVtorRpraJrbap21bbVttWiYraYraNSttW21bbVttW21bbVttW21RExWlKq2hVbbV//9oACAEBAAEFAv8AkVrmcwCG8VLL2VIlDN7EGL2FpnjX/qaVZjSq9lL95mLTdTBw3qVl7h+7s/8AGXcXeDJUo8tdHHEuUwQmIf6lmtkyhca4lBaGIESi3kXGb/8Ac2X+MzqXj7tHCFXLJKnb2plaUhI/mqfzssaZUy264S7aZUrvv8XsP38xWI5M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"/>
                </defs>
                </svg>
            </div>

            <div className="mr-7 mt-3 halflg:flex hidden">
                <ul className="flex">
                    <li className="menuli borderbottom pb-2 ml-8">صفحه اصلی</li>
                    <li className="menuli ml-8">تماس با‌ما</li>
                    <li className="menuli ml-8">پشتیبانی</li>
                    <li className="menuli">ارتباط با‌ما</li>
                </ul>
            </div>

        </div>
        <div className="halflg:flex hidden items-center">
            <button className="w-24 h-12 py-2 px-8 border-2 border-solid border-btnbcolor hover:border-black rounded-lg ml-3 text-sm transition200">ورود</button>
            <button className="w-42 h-12 py-3 px-8 bg-booking text-white hover:bg-bookingDark border-none rounded-lg text-sm transition200">رزرو جلسه مشاوره</button>
        </div>
        

    </header> 
    </div>
    );
}
 
export default Navbar;