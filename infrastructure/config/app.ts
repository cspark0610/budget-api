/**
 * Config source: https://git.io/JfefZ
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import proxyAddr from 'proxy-addr';
import Env from '@ioc:Adonis/Core/Env';
import { ServerConfig } from '@ioc:Adonis/Core/Server';
import { LoggerConfig } from '@ioc:Adonis/Core/Logger';
import { ProfilerConfig } from '@ioc:Adonis/Core/Profiler';
import { ValidatorConfig } from '@ioc:Adonis/Core/Validator';

/*
|--------------------------------------------------------------------------
| Application secret key
|--------------------------------------------------------------------------
|
| The secret to encrypt and sign different values in your application.
| Make sure to keep the `APP_KEY` as an environment variable and secure.
|
| Note: Changing the application key for an existing app will make all
| the cookies invalid and also the existing encrypted data will not
| be decrypted.
|
*/
export const appKey: string = Env.get('APP_KEY');

export const http: ServerConfig = {
  allowMethodSpoofing: false,
  subdomainOffset: 2,
  generateRequestId: true,
  trustProxy: proxyAddr.compile('loopback'),
  etag: false,
  jsonpCallbackName: 'callback',
  cookie: {
    domain: '',
    path: '/',
    maxAge: '2h',
    httpOnly: true,
    secure: false,
    sameSite: false,
  },
};

export const logger: LoggerConfig = {
  name: Env.get('APP_NAME'),
  enabled: true,
  level: Env.get('LOG_LEVEL', 'info'),
  prettyPrint: Env.get('NODE_ENV') === 'development',
};

export const profiler: ProfilerConfig = {
  enabled: true,
  blacklist: [],
  whitelist: [],
};

export const validator: ValidatorConfig = {};
