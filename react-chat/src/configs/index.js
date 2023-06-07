import dotenv from 'dotenv';

const result = dotenv.config({ path: '../../.env' });

export const configs = {
  API: result.process.env.API || 'localhost:3000',
}