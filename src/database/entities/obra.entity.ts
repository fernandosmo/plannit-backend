import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('obras')
export class Obra {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  Empreendimento: string;

  @Column()
  Endereço: string;

  @Column()
  Estado: string;

  @Column()
  Regiao: string;

  @Column()
  Assinatura_Contrato: string;

  @Column()
  Alvara_Exec: string;

  @Column()
  Prazo_Exec: string;

  @Column()
  Data_Final: string;

  @Column()
  prazo_exec_invest: string;

  @Column()
  Início_atividades: string;

  @Column()
  Coordenacao: string;

  @Column()
  Gestor: string;
}
