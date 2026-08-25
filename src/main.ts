import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { APP_HOST, APP_PORT, FRONTEND_URL } from './config/consts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const frontendUrl = configService.get<string>(FRONTEND_URL);

  const host = configService.get<string>(APP_HOST, '0.0.0.0');
  const appPort =
    process.env.PORT || configService.get<number>(APP_PORT) || 3000;

  if (frontendUrl) {
    app.enableCors({
      origin: frontendUrl,
      credentials: true,
    });
  }

  console.log(`Port: ${appPort}, Host: ${host}`);
  await app.listen(appPort ?? 3000, host);
}
bootstrap();
