import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Competencia } from './competencia.entity';

@Entity('candidato')
export class Candidato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  data_de_nascimento: Date;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  escolaridade: string;

  @Column()
  funcao: string;

  @OneToMany(() => Competencia, (competencia) => competencia.candidato, {
    cascade: true,
  })
  competencias: Competencia[];
}
