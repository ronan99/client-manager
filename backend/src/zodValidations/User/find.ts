import { z } from 'zod'

export const clientFindSchema = z.object({
	name: z
		.string({
			invalid_type_error: 'Nome inválido.',
		}).optional(),
	email: z
		.string({
			invalid_type_error: 'Email inválido.',
		}).optional(),
	phone: z
		.string({
			invalid_type_error: 'Telefone inválido.',
		}).optional()
})

export type UserCreate = z.infer<typeof clientFindSchema>
