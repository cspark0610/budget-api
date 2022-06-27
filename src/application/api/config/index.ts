import type { JwtModuleOptions } from '@nestjs/jwt';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { TypeOrmDirectory } from '@infrastructure/adapter/data-persistence/typeorm/TypeOrmDirectory';
import Joi from 'joi';
import { join } from 'path';

export const configSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test'),
  PORT: Joi.number().default(3000),
  DB_HOST: Joi.string(),
  DB_PORT: Joi.number(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string(),
  MEILI_SEARCH_HOST: Joi.string().required(),
  MEILI_SEARCH_API_KEY: Joi.string().required(),
});

export const configurations = () => ({
  api: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  database: {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [
      // `${TypeOrmDirectory}/entity/**/*{.ts,.js}`,
      `${TypeOrmDirectory}/**/*entity{.ts,.js}`,
      `${TypeOrmDirectory}/**/**/*entity{.ts,.js}`,
    ],
    autoLoadEntities: true,

    // Migrations
    migrationsRun: true,
    migrationsTableName: 'migration_table',
    migrations: [
      join(
        __dirname,
        'src/infrastructure/adapter/data-persistence/typeorm/migrations/**/*{.ts,.js}', // 'src/migrations/**/*{.ts,.js}',
      ),
    ],
    cli: {
      migrationsDir:
        'src/infrastructure/adapter/data-persistence/typeorm/migrations', // 'src/migrations',
    },

    // TypeORM
    synchronize: false,
    logging: process.env.NODE_ENV === 'development',
    logger: 'file',
  } as TypeOrmModuleOptions,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '15m',
  } as JwtModuleOptions,
  meiliSearch: {
    host: process.env.MEILI_SEARCH_HOST,
    headers: {
      Authorization: `Bearer ${process.env.MEILI_SEARCH_API_KEY}`,
    },
  },
  url: {
    base: process.env.BASE_URL || 'http://localhost:3000',
  },
});
