import { useRef, useState } from "react";

export default function Login() {
    
    const [emailIsInvalid, setEmailIsInvalid] = useState();

    const email = useRef();
    const password = useRef();
    function handleSubmit(event) {
        event.preventDefault();

        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        console.log(enteredEmail, enteredPassword);

        const emailIsvalide = !enteredEmail.includes('@')
        if(!emailIsvalide){
            setEmailIsInvalid(true);
            return
        }

        
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" ref={email}/>

                    <div className="control-error">{emailIsInvalid && <p>Entered valid email</p> }</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" ref={password}/>
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                {/* defult button type is submit and because of that it relod the page or componenets (reason is html send http request after sending sumbit the form by defult ) */}
                {/* so for preventing that need to declair type button */}
                {/* this is one way, but we don't do in this way */}
                {/* we add even listener to the form  */}
                <button
                    className="button"
                    // type="button"
                    // onClick={handleSubmit}
                >
                    Login
                </button>
            </p>
        </form>
    );
}
