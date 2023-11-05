import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatoModule } from './candidato/candidato.module';
import { join } from 'path';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'dmd_jobs',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      migrations: [`${__dirname}/migration/{.ts,*,js}`],
      migrationsRun: true,
    }),
    CandidatoModule,
    UsuarioModule,
  ],
})
export class AppModule {}
