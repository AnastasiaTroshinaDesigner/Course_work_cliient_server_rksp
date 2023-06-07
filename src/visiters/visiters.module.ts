import { Module } from '@nestjs/common';
import { VisitersService } from './visiters.service';
import { VisitersController } from './visiters.controller';
import { Visiters } from './visiters.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from 'src/Tickets/ticket.entity';

@Module({
  controllers: [VisitersController],
  providers: [VisitersService],
  imports: [TypeOrmModule.forFeature([Visiters, Ticket])],
})
export class VisitersModule {}
