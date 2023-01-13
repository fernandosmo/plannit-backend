import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Obra } from './obra.entity';

@Entity('grupo_materiais')
export class Grupo_materiais {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Obra, (obra) => obra.id)
  obra: Obra;

  @Column()
  nome: string;
}
