import client from "./axios.config.js";
const question = '/question';

const show = (id) => {
    return client.get(`${question}/${id}`)
}
const create = (data) => {
    return client.post(`${question}`, data)
}

export {  show , create }