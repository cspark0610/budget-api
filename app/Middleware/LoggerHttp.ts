import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Env from '@ioc:Adonis/Core/Env';
import morgan from 'morgan';
import {
  dim,
  cyanBright,
  greenBright,
  blueBright,
  redBright,
  yellowBright,
  bold,
  bgRed,
} from 'colorette';

export default class LoggerHttp {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const status = (status: string) => {
      if (parseInt(status, 10) >= 500) return bgRed(status);
      if (parseInt(status, 10) >= 400) return redBright(status);
      if (parseInt(status, 10) >= 300) return cyanBright(status);
      return greenBright(status);
    };

    const method = (method: string) => {
      if (method === 'GET') return bold(blueBright(method));
      if (method === 'POST') return bold(greenBright(method));
      if (method === 'PUT') return bold(yellowBright(method));
      if (method === 'PATCH') return bold(cyanBright(method));
      if (method === 'DELETE') return bold(redBright(method));
      return dim(method);
    };
    const loggerHttp = morgan((tokens, req, res) => {
      if (Env.get('NODE_ENV') === 'test') return;
      return [
        tokens.date(req, res),
        method(tokens.method(req, res) ?? '-'),
        dim(tokens.url(req, res) ?? '-'),
        status(tokens.status(req, res) ?? '-'),
        '-',
        tokens.res(req, res, 'content-length') || 0,
        '-',
        tokens['response-time'](req, res),
        'ms',
      ].join(' ');
    });
    loggerHttp(request.request, response.response, () => {});

    await next();
  }
}
