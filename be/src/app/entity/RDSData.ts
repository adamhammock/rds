import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";

@Entity()
export class RDSData {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
