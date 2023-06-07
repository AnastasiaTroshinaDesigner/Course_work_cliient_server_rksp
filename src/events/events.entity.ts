import { ApiProperty } from '@nestjs/swagger';
import { Ticket } from 'src/Tickets/ticket.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Events {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @ApiProperty({ example: 'Лекция "Михаил Врубель"', description: 'Название мероприятия' })
  @Column()
  fullname: string;
  @ApiProperty({ example: '25', description: 'Дата' })
  @Column() //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  date: number;
  @ApiProperty({ example: 'май', description: 'Месяц' })
  @Column()
  mounth: string;
  @OneToMany(() => Ticket, (ticket) => ticket.event)
  tickets: Ticket[];
}
