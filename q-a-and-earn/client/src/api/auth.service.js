import client from "./axios.config";
const auth = "/auth";
const user = "/user";

const register = (username, password) => {
    return client
    .post(`${auth}/register`, {username,password})
    .then((res) => {console.log(res)})
}

const login = (username, password) => {
    try {
        return client
        .post(`${auth}/login`, {username,password})
        .then((res) => {
            if(res.data.token) {
                console.log(res.data.message)
                localStorage.setItem("user", JSON.stringify(res.data.token))
            }
            return res.data.token;
        })
    }catch(err){
        console.log(err)
    }
}

const currentUser = () => {
    let user = localStorage.getItem("user");
    return JSON.parse(user)
}

const logout = () => {
    localStorage.removeItem("user")
}

export {register, login, currentUser,  logout}