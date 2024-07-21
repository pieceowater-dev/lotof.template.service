// src/modules/template/template.controller.ts
import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { TemplateService } from './template.service';

@Controller()
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @EventPattern('ping')
  handlePing(): string {
    console.log('got PING, sends PONG!');
    return 'PONG';
  }
  @EventPattern('template-event-pattern')
  async handleEvent(data: any) {
    console.log('new data from RabbitMQ:');
    console.log(data);
    // Handle incoming data from RabbitMQ
  }
}
