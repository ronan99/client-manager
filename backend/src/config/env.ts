import { z } from 'zod'
require('dotenv').config()

const envSchema = z.object({
	DATABASE_HOST: z.string(),
	DATABASE_PASSWORD: z.string(),
	DATABASE_USER: z.string(),
	DATABASE_NAME: z.string()
});

export const env = envSchema.parse(process.env)
