import { Module } from '@nestjs/common';
import { TicketsModule } from './Tickets/tickets.module';
import { EventsModule } from './events/events.module';
import { VisitersModule } from './visiters/visiters.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'reflect-metadata';

@Module({
  controllers: [],
  providers: [],

  imports: [
    EventsModule,
    VisitersModule,
    TicketsModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      username: 'postgres', //имя пользователя
      password: 'password', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: true, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
      entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],
})
export class AppModule {}
