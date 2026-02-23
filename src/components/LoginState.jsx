import { useState } from "react";
import Input from "./Input";

export default function Login() {
   // const [enteredEmail, setEnteredEmail] = useState("");
   // const [enteredPassword, setEnteredPassword] = useState("");

   const [enteredInput, setEnteredInput] = useState({
      email: "",
      password: "",
   });

   const [didEdit, setDidEdit] = useState({
      email: false,
      password: false,
   });

   const emailISInvalid = didEdit.email && !enteredInput.email.includes("@");
   const passwordISInvalid =
      didEdit.password && enteredInput.password.trim().length < 6;

   function handleSubmit(e) {
      e.preventDefault();
      console.log(enteredInput);
   }

   function handleInputChange(value, itendtifer) {
      setEnteredInput((prev) => ({ ...prev, [itendtifer]: value }));
   }

   function handleInputBlur(itendtifer) {
      setDidEdit((prev) => ({ ...prev, [itendtifer]: true }));
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
               onBlur={() => handleInputBlur("email")}
               onChange={(event) =>
                  handleInputChange("email", event.target.value)
               }
               value={enteredInput.email}
               error={emailISInvalid && "Please enter a valid email!"}
            />

            <Input
               label="Password"
               id="password"
               type="password"
               name="password"
               onChange={(event) =>
                  handleInputChange("password", event.target.value)
               }
               onBlur={() => handleInputBlur("password")}
               value={enteredInput.password}
               error={passwordISInvalid && "Please enter a valid password!"}
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
