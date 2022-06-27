import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configSchema, configurations } from '../api/config';
import { ProjectApuModule } from './ProjectApuModule';
import { ProjectAreaModule } from './ProjectAreaModule';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      validationSchema: configSchema,
      load: [configurations],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>('database'),
    }),     
    ProjectApuModule, 
    ProjectAreaModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
