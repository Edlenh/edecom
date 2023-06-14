import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
 } from "../../utils/firebase/firebase.utils"

 import SignUpForm from "../../components/signUpForm/sign-up-form.component";
 import SignInForm from "../../components/signInForm/sign-in-form.component";


const Authentication = () =>{
 
    return(
        <div>
            <SignInForm />
            <SignUpForm />

          
        </div>
    )
}

export default Authentication