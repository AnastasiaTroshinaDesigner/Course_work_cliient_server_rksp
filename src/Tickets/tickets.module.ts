import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { Ticket } from './ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from 'src/events/events.entity';
import { Visiters } from 'src/visiters/visiters.entity';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService],
  imports: [
    TypeOrmModule.forFeature([Events, Ticket, Visiters]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class TicketsModule {}
