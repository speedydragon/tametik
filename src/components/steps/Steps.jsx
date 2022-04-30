import React from 'react'

const Steps = () => {
    return ( 
        <div className="w-full h-110 bg-amber-600 mt-4">
            <div className="flex justify-center">
                <p className="text-2xl mt-16">مراحل کار در غربالگری تمشک</p>
            </div>
            <div className="flex justify-center mt-36">
            <svg className="stepsSVG hover:-translate-y-5 transition-transform ease-in-out" width="102" height="88" viewBox="0 0 102 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M74.1856 0.0454751C81.4624 -0.350116 88.6383 1.84761 94.0454 6.15515C98.9977 10.8583 101.524 17.0998 101.12 23.4732V64.5268C101.575 70.9002 98.9977 77.1417 94.0959 81.8448C88.6888 86.1524 81.4624 88.3501 74.1856 87.9545H26.9869C19.6594 88.3501 12.4836 86.1524 7.0765 81.8448C2.12417 77.1417 -0.402523 70.9002 0.0522821 64.5268V23.4732C-0.402523 17.0998 2.12417 10.8583 7.0765 6.15515C12.4836 1.84761 19.6594 -0.350116 26.9869 0.0454751H74.1856ZM72.8717 20.1327C69.7386 17.4075 64.6852 17.4075 61.5521 20.1327L58.1663 23.1216C57.661 23.5611 57.661 24.3084 58.1663 24.7479C58.1663 24.7479 58.2655 24.8337 58.4421 24.9863L59.685 26.0616C60.4041 26.6838 61.3015 27.4609 62.2027 28.2423L65.2585 30.899C65.8961 31.4561 66.3191 31.8295 66.3528 31.8686C66.9087 32.396 67.2624 33.0993 67.2624 33.8905C67.2624 35.4728 65.7969 36.7915 63.9272 36.7915C63.0681 36.7915 62.2595 36.4838 61.7037 36.0003L53.2645 28.7038C52.8602 28.3522 52.1528 28.3522 51.7485 28.7038L27.6438 49.6701C25.9762 51.1206 25.016 53.0546 24.9655 55.1205L24.6623 65.5377C24.6623 66.1091 24.8644 66.6366 25.3192 67.0322C25.7741 67.4278 26.3805 67.6475 27.0374 67.6475H38.9129C41.3385 67.6475 43.6631 66.8124 45.4318 65.3179L79.4411 35.6486C82.5237 32.9235 82.5237 28.528 79.4411 25.8468L72.8717 20.1327Z" fill="black"/>
            </svg>

            <svg className="stepsSVG" width="42" height="82" viewBox="0 0 42 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41 81L1 41L41 1" stroke="#4E4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg className="stepsSVG hover:-translate-y-5 transition-transform ease-in-out" width="88" height="80" viewBox="0 0 88 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M61.4039 9.02097e-06C63.4647 -0.00397991 65.0942 1.31536 65.099 3.07448L65.1038 6.07297C78.4754 6.93654 87.3083 14.4448 87.3227 25.959L87.3755 59.6621C87.3946 72.2158 77.8236 79.9399 62.4822 79.9599L25.0083 80C9.76275 80.0159 0.0719547 72.1079 0.0527839 59.5182L3.21707e-05 26.2109C-0.0191063 14.6207 8.50228 7.13244 21.8739 6.12095L21.8691 3.12245C21.8643 1.36333 23.4459 0.039998 25.5546 0.039998C27.6634 0.036 29.245 1.35534 29.2498 3.11446L29.2546 5.91305L57.7231 5.88107L57.7183 3.08247C57.7135 1.32335 59.2951 0.00401608 61.4039 9.02097e-06ZM63.3593 56.7676H63.3114C61.1067 56.8115 59.3382 58.3348 59.3862 60.1739C59.391 62.0129 61.169 63.5282 63.3737 63.5682C65.6214 63.5642 67.4427 62.0409 67.4379 60.1619C67.4379 58.2828 65.6119 56.7676 63.3593 56.7676ZM23.8676 56.7716C21.663 56.8515 19.9376 58.3748 19.9424 60.2138C20.0431 62.0529 21.8643 63.4922 24.0689 63.4082C26.2304 63.3283 27.951 61.805 27.8503 59.966C27.8024 58.1669 26.0243 56.7676 23.8676 56.7716ZM43.6135 56.7516C41.4088 56.8355 39.6883 58.3548 39.6883 60.1938C39.7889 62.0329 41.6101 63.4682 43.8148 63.3882C45.9715 63.3043 47.6968 61.7851 47.5962 59.942C47.5482 58.1469 45.7702 56.7476 43.6135 56.7516ZM23.8436 42.3788C21.639 42.4587 19.9184 43.982 19.9232 45.8211C20.0191 47.6601 21.8451 49.0994 24.0497 49.0154C26.2064 48.9355 27.927 47.4123 27.8264 45.5732C27.7784 43.7741 26.0051 42.3748 23.8436 42.3788ZM43.5943 42.2388C41.3897 42.3188 39.6643 43.842 39.6691 45.6811C39.7649 47.5202 41.5909 48.9555 43.7956 48.8755C45.9523 48.7916 47.6729 47.2723 47.577 45.4332C47.5243 43.6341 45.751 42.2348 43.5943 42.2388ZM63.3401 42.2588C61.1355 42.2988 59.4101 43.7781 59.4149 45.6172V45.6611C59.4628 47.5002 61.2841 48.8955 63.4935 48.8555C65.6502 48.8116 67.3708 47.2883 67.3228 45.4492C67.2222 43.6901 65.492 42.2548 63.3401 42.2588ZM57.7327 12.038L29.2642 12.07L29.269 15.3043C29.269 17.0275 27.6922 18.3868 25.5834 18.3868C23.4746 18.3908 21.8882 17.0355 21.8882 15.3123L21.8834 12.2339C12.5377 13.0055 7.36641 17.5312 7.38076 26.2029L7.38558 27.4463L79.9468 27.3663V25.967C79.7407 17.3713 74.5071 12.8616 65.1134 12.1899L65.1182 15.2684C65.1182 16.9875 63.4935 18.3508 61.4326 18.3508C59.3239 18.3548 57.7375 16.9955 57.7375 15.2764L57.7327 12.038Z" fill="black"/>
            </svg>

            <svg className="stepsSVG" width="42" height="82" viewBox="0 0 42 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41 81L1 41L41 1" stroke="#4E4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg className="stepsSVG hover:-translate-y-5 transition-transform ease-in-out" width="77" height="74" viewBox="0 0 77 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.3985 0C69.398 0 76.6364 6.52667 76.6364 17.71V55.5867C76.6364 66.9533 69.398 73.3333 56.3985 73.3333H21.1285C8.33512 73.3333 0.886368 66.9533 0.886368 55.5867V17.71C0.886368 6.52667 8.33512 0 21.1285 0H56.3985ZM22.2647 50.38C21.0022 50.27 19.7818 50.7833 19.1085 51.7367C18.4351 52.6533 18.4351 53.8633 19.1085 54.8167C19.7818 55.7333 21.0022 56.2833 22.2647 56.1367H55.258C56.9372 55.99 58.2039 54.7397 58.2039 53.2767C58.2039 51.7733 56.9372 50.5267 55.258 50.38H22.2647ZM55.258 33.6563H22.2647C20.4509 33.6563 18.9822 34.9433 18.9822 36.52C18.9822 38.0967 20.4509 39.38 22.2647 39.38H55.258C57.0676 39.38 58.5405 38.0967 58.5405 36.52C58.5405 34.9433 57.0676 33.6563 55.258 33.6563ZM34.8434 17.05H22.2647V17.0867C20.4509 17.0867 18.9822 18.37 18.9822 19.9467C18.9822 21.5233 20.4509 22.8067 22.2647 22.8067H34.8434C36.6572 22.8067 38.1301 21.5233 38.1301 19.9063C38.1301 18.3333 36.6572 17.05 34.8434 17.05Z" fill="black"/>
            </svg>

            <svg className="stepsSVG" width="42" height="82" viewBox="0 0 42 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41 81L1 41L41 1" stroke="#4E4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg className="hover:-translate-y-5 transition-transform ease-in-out" width="102" height="88" viewBox="0 0 102 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.54 0C89.6886 0 101.172 10.472 101.172 26.048V62.0004C101.172 77.528 89.6886 88 72.54 88H28.6822C11.5336 88 0 77.528 0 62.0004V26.048C0 10.472 11.5336 0 28.6822 0H72.54ZM71.7307 30.8C70.0108 29.304 67.1779 29.304 65.458 30.8L44.5661 48.972L35.7136 41.272C33.9937 39.776 31.1609 39.776 29.4409 41.272C27.721 42.768 27.721 45.188 29.4409 46.728L41.4804 57.156C42.3403 57.904 43.4532 58.256 44.5661 58.256C45.7296 58.256 46.8425 57.904 47.7024 57.156L71.7307 36.256C73.4506 34.76 73.4506 32.34 71.7307 30.8Z" fill="black"/>
            </svg>

            </div>

        </div>
     );
}
 
export default Steps;