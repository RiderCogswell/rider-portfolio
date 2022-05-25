import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const ContactForm = () => {
    // error message hooks! initialize to empty string
    const [errorMessage, setErrorMessage] = useState('');
    // hook that manages form state and initializes the values to empty string
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // is valid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                // if no error
                setErrorMessage('');
                }  
            }
          
        }
       
        // if no error, 
        if (!errorMessage) { 
            // without the 'spread operator' =  ...formState,
            // formState would be overwritten and only contain 
            // the name key-value pair
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        // name does not refer to the 'name' in the formState, it refers to the target.name element, which allows us to use [ ] to dynamically create property names
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id="contact-form" className="mid" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email}/>
                </div>
                <div>
                    <label htmlFor="name">Message: </label>
                    <br />
                    <textarea name="message" onBlur={handleChange} defaultValue={message} rows="5" />
                    {/* this is a short circuit, where if the first value is true, the second expression is evaluated */}
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button data-testid="button">Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;