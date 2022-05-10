import axios from "axios";

const backendAPI = "http://localhost:4000/api";
// const backendAPI = "heroku link later"
// baseURLs are used in real industry code to keep things DRY and not repeating.

const tellQa = axios.create({
	baseURL: `${backendAPI}`,
	headers: {
		"Content-type": "application/json",
	},
});

export default tellQa; 