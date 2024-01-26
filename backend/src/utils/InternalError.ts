export default class InternalError extends Error {
	mensagem: string
	statusCode?: number
	erros?: string | string[] | object | object[]
	keyValue?: object
	code?: number | string

	constructor(message: string, statusCode?: number, errors?: string | string[] | object | object[] | undefined) {
		super(message)
		this.mensagem = message
		this.statusCode = statusCode

		if (errors) {
			this.erros = errors
		}
	}
}
