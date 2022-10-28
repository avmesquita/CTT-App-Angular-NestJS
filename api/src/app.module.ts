import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodigoPostalModule } from './codigo-postal/codigo-postal.module';
import { ApartadoModule } from './apartado/apartado.module';
import { ConcelhoModule } from './concelho/concelho.module';
import { DistritoModule } from './distrito/distrito.module';
import { CodigoPostal } from './codigo-postal/entities/codigo-postal.entity';
import { Apartado } from './apartado/entities/apartado.entity';
import { Concelho } from './concelho/entities/concelho.entity';
import { Distrito } from './distrito/entities/distrito.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, './', 'frontend'),
    }),
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/CTTPortugal.db3',
      autoLoadEntities: true,
      //synchronize: true,
      logging: [], // TO DEBUG: [ "query", "error" ]
      entities: [        
        CodigoPostal,
        Apartado,
        Concelho,
        Distrito
      ]
    }),
    CodigoPostalModule, 
    ApartadoModule, 
    ConcelhoModule, 
    DistritoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
