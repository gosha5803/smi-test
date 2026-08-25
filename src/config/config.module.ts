import { ConfigModule } from '@nestjs/config';
// TODO валидация .env через joi
export const configModule = ConfigModule.forRoot({ isGlobal: true });
