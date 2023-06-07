// export class Visiters {
//     id: number;
//     fullname: string;
//     age: number;
//     lgota: number; //есть лгота 1, нет 0
//   }
import { ApiProperty } from '@nestjs/swagger';
import { Ticket } from 'src/Tickets/ticket.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('visiters') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Visiters {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @ApiProperty({ example: 'Николай Николаев', description: 'Имя' })
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullname: string;
  @ApiProperty({ example: '30', description: 'Возраст' })
  @Column()
  age: number;
  @ApiProperty({ example: '1', description: 'Льгота' })
  @Column()
  lgota: number;
  @OneToMany(() => Ticket, (ticket) => ticket.event)
  tickets: Ticket[];
}
