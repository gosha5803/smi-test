"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("prisma/config");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_SCHEMA } = process.env;
if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT || !DB_NAME) {
    throw new Error('Missing required DB_* environment variables in .env');
}
const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=${DB_SCHEMA || 'public'}`;
exports.default = (0, config_1.defineConfig)({
    datasource: {
        url: DATABASE_URL,
    },
});
//# sourceMappingURL=prisma.config.js.map