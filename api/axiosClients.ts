// libs
import axios from 'axios'

const axiosClient = axios.create({
	baseURL: `https://deploy-restapi-crud.herokuapp.com/api`,
	headers: {
		'Content-Type': 'application/json',
	},
})

// Add a request interceptor
axiosClient.interceptors.request.use(
	function (config) {
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

// Add a response interceptor
// axiosClient.interceptors.response.use(
// 	function (response) {
// 		return response
// 	},
// 	function (error) {
// 		// const limit = 5
// 		// const { config, data, status } = error.response

// 		// console.log({ config, data, status })

// 		// const URLS = [`/productss?limit=${limit}`]

// 		// if (URLS.includes(config.url) && status === 404) {
// 		// 	throw new Error(data)
// 		// }

// 		return Promise.reject(error)
// 	}
// )

export default axiosClient
