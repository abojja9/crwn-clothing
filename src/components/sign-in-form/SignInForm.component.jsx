import React, {useState} from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/Button.component';
import FormInput from '../form-input/FormInput.component';
import './SignInForm.styles.scss'

const defaultFormFields = {
    email: '',
    password:'',
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        console.log('Clicked!')
        await signInWithGooglePopup();
        
        // console.log(response);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            // console.log(response);
            resetFormFields()
        } catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert('incorrect password for email')
                    break;
                case "auth/user-not-found":
                    alert('no user associated with this email')
                    break;
                default:
                    console.log(error);
            }
            if (error.code === "auth/wrong-password"){
                
            }
            console.log(error);
        }
    }

    // console.log(formFields)
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label="Email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />

                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                <div className="buttons-container">
                <Button type='submit'>Sign In</Button>
                <Button 
                    buttonType='google'
                    type='button'
                    onClick={signInWithGoogle} 
                >
                    Google Sign In
                </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
