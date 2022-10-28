import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
  .setTitle('CTT Api')
  .setDescription('Busca de códigos postais de Portugal')
  .setContact('Andre Mesquita','https://andremesquita.com','')
  .setExternalDoc('Documentação do Projeto', 'https://andremesquita.com/ctt-app')
  .setVersion('1.0')  
  .addTag('apartado')
  .addTag('codigo-postal')
  .addTag('concelho')  
  .addTag('distrito')  
  .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);  

  await app.listen(3000);
}
bootstrap();
