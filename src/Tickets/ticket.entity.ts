import { ApiProperty } from '@nestjs/swagger';
import { Events } from 'src/events/events.entity';
import { Visiters } from 'src/visiters/visiters.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tickets') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Ticket {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @ApiProperty({ example: 'Лекция "Михаил Врубель".Льготный', description: 'Название билета' })
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullname: string;
  @ApiProperty({ example: 'Активный', description: 'Статус билета' })
  @Column()
  position: string;
  @ManyToOne(() => Events, (event: Events) => event.tickets)
  event: Events;
  @ManyToOne(() => Visiters, (event: Visiters) => event.tickets)
  visiter: Visiters;
}
