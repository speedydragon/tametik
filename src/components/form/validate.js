export const validate = (data, type) => {

    const errors = {};

    // if (!data.email) {
    //     errors.email = "هنوز ایمیل خود را وارد نکرده اید"
    // } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    //     errors.email = "ایمیل نامعتبر است"
    // } else {
    //     delete errors.email
    // }

    if (!data.password) {
        errors.password = "هنوز پسورد خود را وارد نکرده اید"
    } else if (data.password.length < 6) {
        errors.password = "پسورد باید از ۶ کاراکتر یا بیشتر تشکیل شده باشد"
    } else {
        delete errors.password
    }

    if (type === "signup") {

        if (!data.name.trim()) {
            errors.name = "هنوز نام خود را وارد نکرده اید"
        } else {
            delete errors.name
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "پسورد قبلی خود را وارد کنید"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "پسورد وارد شده با پسورد قبلی مطابقت ندارد"
        } else {
            delete errors.confirmPassword
        }
        
        if (!data.phoneNum) {
            errors.phoneNum = "هنوز شماره تلفن همراه خود را وارد نکرده اید"
        } else if (data.phoneNum.length < 10) {
            errors.phoneNum = "شماره وارد شده از ده رقم کم تر است"
        } else {
            delete errors.phoneNum
        }

    }

    return errors;
}