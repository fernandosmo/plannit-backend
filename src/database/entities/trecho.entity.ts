import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Setor } from './setor.entity';
import { Rua } from './rua.entity';

@Entity('trechos')
export class Trecho {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Setor, (setor) => setor.id)
  setor: Setor;

  @ManyToOne(() => Rua, (rua) => rua.id)
  rua: Rua;
}
