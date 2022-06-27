import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Budget API')
    .addBearerAuth()
    .setDescription('Backend')
    .setVersion('2.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/v2/docs', app, document, {
    uiConfig: {
      deepLinking: true,
      displayOperationId: true,
      defaultModelRendering: 'model',
      displayRequestDuration: true,
      docExpansion: 'none',
      filter: true,
      // layout: 'BaseLayout',
      showExtensions: true,
      showCommonExtensions: true,
      syntaxHighlight: {
        activate: true,
        theme: 'arta',
      },
      tryItOutEnabled: false,
    },
    staticCSP: true,
  });
};
