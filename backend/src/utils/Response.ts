export function successResponse<T>(message: string, data: T | null = null, status = 200) {
	return {
		status: status,
		message: message,
		data: data,
	}
}

export function failResponse<T>(message: string | string[], data: T | null = null, status = 400) {
	return {
		status: status,
		message: message,
		data: data,
	}
}
