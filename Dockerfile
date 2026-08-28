FROM node:20-alpine AS builderr
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY prisma ./prisma/
RUN npx prisma generate 
COPY . .
RUN npm run build       

FROM node:20-alpine

WORKDIR /app

COPY --from=builderr /app/dist ./dist
COPY --from=builderr /app/node_modules ./node_modules
COPY --from=builderr /app/package*.json ./
COPY --from=builderr /app/prisma ./prisma
COPY --from=builderr /app/prisma.config.ts ./prisma.config.ts

EXPOSE 8080

CMD ["node", "dist/src/main"]
# отредактировать чтобы кеш скинуть