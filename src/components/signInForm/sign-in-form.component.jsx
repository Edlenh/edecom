import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.style.scss"

const defaultFormFields ={
    email: '',
    password: '',
}

const SignInForm = () =>{
    const[formFields, setFormFields] = useState(defaultFormFields);
    const {email, password, }= formFields;
    // console.log(formFields)
    
    const resetFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () =>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }
    const handleSubmit = async(event) =>{
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(response)
            resetFields();
            
        } catch (error) {
        }
    }

    const handleChange = (event)=>{
        const{name , value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Log In To Your Account</h2>
            <span>Email, Password</span>
            <form onSubmit={handleSubmit}>
   

           <FormInput 
           label = "Email"
            type="email" required onChange={handleChange} name="email" value={email}/>

            <FormInput 
            label="Password"
             type="password" required onChange={handleChange} name="password" value={password}/>
            
            <div className="buttons-container">
            <Button type="submit">Log In</Button>
            <Button buttonType="google" onClick = {signInWithGoogle}>Google Log In</Button>
            </div>
            </form>
           
        </div>
    )
}

export default SignInForm;