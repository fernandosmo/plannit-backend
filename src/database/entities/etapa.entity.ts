import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('etapas')
export class Etapa {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  nome: string;
}
