import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
// TODO Сделать запрос на получение краткой инфы через GRAPHQL и закомититься

// Далее усложнить резюме навыками и т.п.
// Сделат детальное чтение

// Сделать поиск, может фильтры
// Сделать создание резюме
