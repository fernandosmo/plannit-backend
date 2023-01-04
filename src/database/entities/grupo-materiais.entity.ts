import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('grupo_materiais')
export class Grupo_materiais {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  nome: string;
}
