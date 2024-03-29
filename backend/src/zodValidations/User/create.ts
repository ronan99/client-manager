import { z } from 'zod'

export const clientCreateSchema = z.object({
	name: z
		.string({
			invalid_type_error: 'Nome inválido.',
			required_error: 'Nome é obrigatório.',
		}),
	phone: z
		.string({
			invalid_type_error: 'Telefone inválido.',
			required_error: 'Telefone é obrigatório.',
		})
		.min(10, { message: 'Telefone deve ter mais de 10 digitos'})
		.max(12, { message: 'Telefone deve ter menos de 12 digitos'}),
	email: z
		.string({
			invalid_type_error: 'Email inválido.',
			required_error: 'Email é obrigatório.',
		}).email({
			message: 'Email inválido.',
		}),
	x: z
		.number({
			invalid_type_error: 'X inválido.',
			required_error: 'X é obrigatório.',
		}),
	y: z
		.number({
			invalid_type_error: 'Y inválido.',
			required_error: 'Y é obrigatório.',
		})
})

export type UserCreate = z.infer<typeof clientCreateSchema>
