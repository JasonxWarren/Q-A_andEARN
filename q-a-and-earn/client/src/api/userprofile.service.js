import client from "./axios.config.js";
const userProfile = '/user';

//awaiting user index for user profile ID 


const show = (data, id) => {
    return client.get(`${userProfile}/${id}`, data)
}


export {show };