import * as process from 'process';
import { IConfig } from './interface/config.interface';

export const config = (): IConfig => ({
  port: process.env.PORT,
  rabbitUrl: process.env.RABBITMQ_URL,
  db: {
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT, 10) ?? 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
});
