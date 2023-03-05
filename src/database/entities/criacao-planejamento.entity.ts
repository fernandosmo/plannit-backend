import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Atividade } from "./atividade.entity";
import { Etapa } from "./etapa.entity";
import { Grupo_materiais } from "./grupo-materiais.entity";
import { Material } from "./materiais.entity";
import { Obra } from "./obra.entity";
import { Rua } from "./rua.entity";
import { Setor } from "./setor.entity";
import { Trecho } from "./trecho.entity";
import { User } from "./user.entity";

@Entity("criar_planejamentos")
export class Criar_planejamento {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => User, (user) => user.id, {
    nullable: false,
  })
  user: User;

  @ManyToOne(() => Obra, (obra) => obra.id, {
    nullable: false,
  })
  obra: Obra;

  @ManyToOne(() => Etapa, (etapa) => etapa.id, {
    nullable: false,
  })
  etapa: Etapa;

  @ManyToOne(() => Atividade, (atividade) => atividade.id, {
    nullable: false,
  })
  atividade: Atividade;

  @ManyToOne(() => Rua, (rua) => rua.id)
  rua: Rua;

  @ManyToOne(() => Setor, (setor) => setor.id)
  setor: Setor;

  @ManyToOne(() => Trecho, (trecho) => trecho.id)
  trecho: Trecho;

  @ManyToOne(() => Grupo_materiais, (grupo_materiais) => grupo_materiais.id)
  grupo_materiais: Grupo_materiais;

  @ManyToOne(() => Material, (material) => material.id)
  material: Material;

  @Column({
    nullable: true,
  })
  qtde: number;

  @Column()
  Data_criacao: string;

  @Column()
  Data_prevista: string;

  @Column({
    nullable: true,
  })
  executado: number;
}
