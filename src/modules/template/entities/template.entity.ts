// src/modules/template/entities/template.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TemplateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Add other columns as needed
}
