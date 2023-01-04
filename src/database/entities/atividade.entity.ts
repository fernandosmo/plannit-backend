import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Etapa } from './etapa.entity';

@Entity('atividades')
export class Atividade {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  nome: string;

  @Column()
  ordem: number;

  @Column()
  unidade: string;

  @ManyToOne(() => Etapa, (etapa) => etapa.id)
  etapa: Etapa;
}
