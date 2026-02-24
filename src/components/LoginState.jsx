import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [enteredPassword, setEnteredPassword] = useState("");

    const {
        value: emailValue,
        handleInputBlur: handleEmailBlur,
        handleInputChange: handleEmailChange,
        hasError: emailHasError,
    } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleInputBlur: handlePasswordBlur,
        handleInputChange: handlePasswordChange,
        hasError: passwordHasError,
    } = useInput("", (value) => hasMinLength(value, 6));

    function handleSubmit(e) {
        e.preventDefault();

        if (emailHasError || passwordHasError) {
            return;
        }

        console.log(enteredInput);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="email"
                    id="email"
                    type="email"
                    name="email"
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailValue}
                    error={emailHasError && "Please enter a valid email!"}
                />

                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                    value={passwordValue}
                    error={passwordHasError && "Please enter a valid password!"}
                />
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

            {/* 
                <p className="form-actions">
                <button className="button button-flat">Reset</button>
                 defult button type is submit and because of that it relod the page or componenets (reason is html send http request after sending sumbit the form by defult ) 
                 so for preventing that need to declair type button 
                 this is one way, but we don't do in this way 
                 we add even listener to the form  
                    <button
                        className="button"
                        // type="button"
                        // onClick={handleSubmit}
                    >
                        Login
                    </button>
                </p>
            */}
        </form>
    );
}
