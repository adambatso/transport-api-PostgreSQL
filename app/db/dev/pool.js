//db/dev/pool.js

import { Pool } from 'pg';

import dotenv from 'dotenv';

dotenv.config();

const databaseConfig = { connectionString: process.env.DATABASE_URL };
// const databaseConfig = {
//     user: 'postgres',
//     host: '127.0.0.1',
//     database: 'transportApi',
//     password: 'tsovnkl',
//     port: 5432,
//   };
console.log('%c databaseConfig admamdamdmamm', 'font-size:20px;color:lime;', databaseConfig);
const pool = new Pool(databaseConfig);

export default pool;