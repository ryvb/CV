import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.STATUS === 'production'
  ? process.env.PROD_PORT
  : process.env.DEV_PORT;

export default PORT;