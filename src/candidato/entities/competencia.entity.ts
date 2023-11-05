import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Candidato } from './candidato.entity';

@Entity('competencia')
export class Competencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'candidato_id', nullable: false })
  candidatoId: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  level: string;

  @ManyToOne(() => Candidato, (candidato) => candidato.competencias)
  @JoinColumn({ name: 'candidato_id', referencedColumnName: 'id' })
  candidato: Candidato;
}
