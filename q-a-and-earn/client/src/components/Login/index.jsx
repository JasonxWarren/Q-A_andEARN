import { useState } from "react";
import * as authService from "../../api/auth.service";

const Login = ({checkUserActive}) => {
    const [username, setusername] =useState("")
    const [password, setPassword] =useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
      await authService.login(username, password).then((res) =>{
          //allows redirect after sign in dont delete
         {checkUserActive();}
            setusername("");
            setPassword("");
        });
        
        window.location.href="/user";
    };
    return (
        <div>
            <form>
            <h1>Login</h1>
                <div>
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
                <label  htmlFor="password">
                    Password</label>
                    <input
                        className = "input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                </div>
                <div >
                    <button className = "standardButton" onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );

}

export default Login;