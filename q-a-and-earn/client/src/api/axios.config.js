import axios from "axios";

const backendAPI = "http://localhost:4000/api";
// const backendAPI = "https://q-a-and-earn.herokuapp.com/api"
// baseURLs are used in real industry code to keep things DRY and not repeating.
let user = JSON.parse(localStorage.getItem("user"))

const client = axios.create({
	baseURL: `${backendAPI}`,
	headers: {
		"Content-type": "application/json",
        authorization: `Bearer ${user}`
	},
});

export default client; 