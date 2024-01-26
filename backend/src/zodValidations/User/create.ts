import { z } from 'zod'

export const userCreateSchema = z.object({
	username: z
		.string({
			invalid_type_error: 'Nome inválido.',
			required_error: 'Nome é obrigatório.',
		}),
	password: z
		.string({
			invalid_type_error: 'Senha inválido.',
			required_error: 'Senha é obrigatório.',
		}),
	email: z
		.string({
			invalid_type_error: 'Email inválido.',
			required_error: 'Email é obrigatório.',
		})
})

export type UserCreate = z.infer<typeof userCreateSchema>
