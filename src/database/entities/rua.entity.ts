import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ruas')
export class Rua {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  nome: string;
}
