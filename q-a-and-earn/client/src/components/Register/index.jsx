import { useState } from 'react';
import * as authService from "../../api/auth.service";



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
        <div>
            <form>
            <h1>Create an Account</h1>
            <div>
                <label htmlFor="username">
            Username</label>
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