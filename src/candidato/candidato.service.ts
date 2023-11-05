import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidato } from './entities/candidato.entity';
@Injectable()
export class CandidatoService {
  constructor(
    @InjectRepository(Candidato)
    private readonly candidatoRepository: Repository<Candidato>,
  ) {}

  async findAll() {
    return await this.candidatoRepository.find({ relations: ['competencias'] });
  }

  create(candidato: Candidato) {
    return this.candidatoRepository.save(candidato);
  }
}
