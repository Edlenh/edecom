import { 
    signInWithGooglePopup, 
    createUserDocFromAuth,
 } from "../../utils/firebase/firebase.utils"



const LogIn = () =>{
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
    }
    return(
        <div>
            <h1>Log In Page</h1>
            <button onClick={logGoogleUser}>Log In With Google</button>
        </div>
    )
}

export default LogIn