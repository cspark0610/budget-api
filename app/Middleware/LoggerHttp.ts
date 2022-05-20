import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { dim, cyan, green, blue, red, yellow, bold, bgRed } from 'colorette';
import morgan from 'morgan';
import Env from '@ioc:Adonis/Core/Env';

export default class LoggerHttp {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const status = (status: string) => {
      if (parseInt(status, 10) >= 500) return bgRed(status);
      if (parseInt(status, 10) >= 400) return red(status);
      if (parseInt(status, 10) >= 300) return cyan(status);
      return green(status);
    };

    const method = (method: string) => {
      if (method === 'GET') return bold(blue(method));
      if (method === 'POST') return bold(green(method));
      if (method === 'PUT') return bold(yellow(method));
      if (method === 'PATCH') return bold(cyan(method));
      if (method === 'DELETE') return bold(red(method));
      return dim(method);
    };
    const loggerHttp = morgan((tokens, req, res) => {
      if (Env.get('NODE_ENV') === 'test') return;
      return [
        method(tokens.method(req, res) ?? '-'),
        dim(tokens.url(req, res) ?? '-'),
        status(tokens.status(req, res) ?? '-'),
        tokens.res(req, res, 'content-length'),
        '-',
        tokens['response-time'](req, res),
        'ms',
      ].join(' ');
      /* console.log(req.request);
      console.log(res.response); */
    });
    loggerHttp(request.request, response.response, () => {});

    await next();
  }
}
