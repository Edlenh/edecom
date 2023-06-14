 import SignUpForm from "../../components/signUpForm/sign-up-form.component";
 import SignInForm from "../../components/signInForm/sign-in-form.component";

import './authentication.style.scss'

const Authentication = () =>{
 
    return(
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />

          
        </div>
    )
}

export default Authentication