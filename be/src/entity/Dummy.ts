import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Dummy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timeStamp: string;

    @Column()
    recNum: number;

    @Column()
    pressure: number;

    @Column()
    pressure2: number;

    @Column()
    rate: number;

    @Column()
    cumulativeVolume: number;

}