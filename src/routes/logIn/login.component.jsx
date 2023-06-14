import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
 } from "../../utils/firebase/firebase.utils"

 import SignUpForm from "../../components/signUpForm/sign-up-form.component";



const LogIn = () =>{
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <button onClick={logGoogleUser}>Log In With Google</button>
            <SignUpForm />
          
        </div>
    )
}

export default LogIn