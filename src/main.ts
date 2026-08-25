import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { APP_PORT, FRONTEND_URL } from './config/consts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const frontendUrl = configService.get<string>(FRONTEND_URL);
  const appPort = configService.get<number>(APP_PORT);

  app.enableCors({
    origin: frontendUrl,
    credentials: true,
  });

  await app.listen(appPort ?? 3000);
}
bootstrap();
