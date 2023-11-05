// src/candidato/candidato.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CandidatoService } from './candidato.service';
import { Candidato } from './entities/candidato.entity';
@Controller('candidato')
export class CandidatoController {
  constructor(private readonly candidatoService: CandidatoService) {}

  @Get()
  findAll() {
    return this.candidatoService.findAll();
  }

  @Post()
  create(@Body() candidato: Candidato) {
    return this.candidatoService.create(candidato);
  }
}
