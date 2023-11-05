import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidato } from './entities/candidato.entity';
import { CandidatoController } from './candidato.controller';
import { CandidatoService } from './candidato.service';
import { Competencia } from './entities/competencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidato, Competencia])],
  controllers: [CandidatoController],
  providers: [CandidatoService],
})
export class CandidatoModule {}
