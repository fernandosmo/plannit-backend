import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Atividade } from './atividade.entity';

@Entity('planejamentos')
export class Planejamento {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Atividade, (atividade) => atividade.etapa)
  etapa: Atividade;

  @ManyToOne(() => Atividade, (atividade) => atividade.id)
  atividade: Atividade;

  @ManyToOne(() => Atividade, (atividade) => atividade.unidade)
  unidade: Atividade;

  @ManyToOne(() => Atividade, (atividade) => atividade.ordem)
  ordem: Atividade;

  @Column({
    nullable: true,
  })
  total: number;

  @Column({
    nullable: true,
  })
  executado: number;

  @Column()
  previsao_fim: Date;
}
