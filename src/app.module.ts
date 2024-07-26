// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigAppModule } from './core/config/config.module';
import { ItemModule } from './modules/item/item.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigAppModule,
    ClientsModule.registerAsync([
      {
        name: 'RABBITMQ_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('rabbitUrl')],
            queue: 'template_queue',
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
    ItemModule,
  ],
})
export class AppModule {}
