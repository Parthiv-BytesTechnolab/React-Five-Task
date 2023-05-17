import * as Yup from 'yup';

export const register = Yup.object({
    firstname : Yup.string().min(2).max(20).required("Please enter the first name"),
    lastname : Yup.string().min(2).max(20).required("Please enter the last name"),
    email : Yup.string().email().required("Please enter the email"),
    // password: Yup
    // .string()
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required("Please enter the password"),
    address : Yup.string().min(5).max(30).required("Please enter the address"),
    dob : Yup.date().max(new Date(Date.now() - 567648000000), "You must be at least 18 years").required("Please enter the Date of birth")
})