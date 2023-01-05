import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Grupo_materiais } from './grupo-materiais.entity';

@Entity('materiais')
export class Material {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Grupo_materiais, (grupo) => grupo.id)
  grupo: Grupo_materiais;

  @Column()
  descricao: string;

  @Column({ type: 'real' })
  custo: number;

  @Column()
  produtividade_dia_equipe: number;
}
