import axiosClient from './axiosClients'

export const handleError = (error: any) => {
	if (error?.response?.data?.msg) {
		throw new Error(error?.response?.data?.msg)
	} else {
		throw new Error(error?.response)
	}
}

export const getData = async ({ queryKey }: any) => {
	try {
		const res = await axiosClient.get(`${queryKey[0]}`)
		return res?.data
	} catch (error: any) {
		handleError(error)
	}
}

export const getInfiniteData = async ({queryKey, pageParam = 1}: any) => {
	try {
		const res = await axiosClient.get(`${queryKey[0]}&page=${pageParam}`)
		return res?.data
	} catch (error: any) {
		handleError(error)
	}
}
