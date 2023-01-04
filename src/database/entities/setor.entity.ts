import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('setores')
export class Setor {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  nome: string;
}
