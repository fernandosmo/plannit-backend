import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Obra } from './obra.entity';

@Entity('etapas')
export class Etapa {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Obra, (obra) => obra.id)
  obra: Obra;

  @Column()
  nome: string;
}
