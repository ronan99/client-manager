export function successResponse<T>(mensagem: string, data: T | null = null, status = 200) {
	return {
		status: status,
		mensagem: mensagem,
		data: data,
	}
}

export function failResponse<T>(mensagem: string | string[], data: T | null = null, status = 400) {
	return {
		status: status,
		mensagem: mensagem,
		data: data,
	}
}
