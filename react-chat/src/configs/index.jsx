import { loadEnv } from 'vite';

// Load the publicly exposed env variables outside of the source code/compile time
process.env = {...process.env, ...loadEnv('development', process.cwd())}

export const configs = {
  API_URL: process.env.VITE_API_URL || 'http://localhost:3000',
  PORT: process.env.VITE_PORT || 3008,
}