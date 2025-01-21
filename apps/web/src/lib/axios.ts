import axios, { AxiosInstance } from 'axios'

import { env } from '@/env'

export const api: AxiosInstance = axios.create({
  baseURL: env.VITE_API_URL,
})

export const apiPrivate: AxiosInstance = axios.create({
  baseURL: env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
