import { z } from 'zod'

export const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_KEYCLOAK_URL: z.string().url(),
  VITE_KEYCLOAK_REALM: z.string(),
  VITE_KEYCLOAK_CLIENT_ID: z.string(),
})

export const env = envSchema.parse(import.meta.env)
