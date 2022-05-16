import client from "./axios.config.js";
const answer = '/answer';

const show = (id) => {
    return client.get(`${answer}/${id}`)
}
const create = (data) => {
    return client.post(`${answer}`, data)
}
const getAll = (data) => {
    return client.get(`${answer}`, data)
}


export {  show , create, getAll }