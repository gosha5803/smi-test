import 'dotenv/config';
import { defineConfig } from 'prisma/config';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_SCHEMA } =
  process.env;

if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT || !DB_NAME) {
  throw new Error('Missing required DB_* environment variables in .env');
}

const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=${DB_SCHEMA || 'public'}`;

export default defineConfig({
  datasource: {
    url: DATABASE_URL,
  },
});
