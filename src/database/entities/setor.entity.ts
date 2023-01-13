import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Obra } from './obra.entity';

@Entity('setores')
export class Setor {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Obra, (obra) => obra.id)
  obra: Obra;

  @Column()
  nome: string;
}
