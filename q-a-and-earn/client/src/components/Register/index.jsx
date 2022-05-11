import { useState } from 'react';
import * as authService from "../../api/auth.service";
import '../../../src/styles.css'


const Register = () => {

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit =  (e) => {
     //   e.PreventDefault();
         authService.register(username,password);
        setPassword("");
        setusername("");
        setSuccessMsg("Your Registration was Successful.");
        console.log("components-->register-->index handlesubmit: ", username, password)

    };

    return (
        <div className="container">
            <form className = "loginForm">
            <h1 className="formTitle">Create an Account</h1>
            <div className="loginContainer">
                <label htmlFor="username">
            Email</label>
                    <input 
                        className = "input"
                        onChange={(e) => setusername(e.target.value)}
                        value={username}
                        type="text"
                        name="username"
                        placeholder="username"
                    />
            
                <label for="chk" aria-hidden="true" htmlFor="password">
            Password</label>
                    <input 
                        className = "input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="text"
                        name="password"
                        placeholder="password"
                    />
                </div>
                    <div>
                        <button className = "standardButton" onClick={handleSubmit}>
                            Sign Up
                        </button>
                    </div>
                    {/* <h1>{successMsg}</h1> */}
            </form>
        </div>
    );

};





export default Register;