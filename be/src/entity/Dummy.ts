import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Dummy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    timeStamp: string;

    @Column({ nullable: true })
    recNum: number;

    @Column({ nullable: true })
    pressure: number;

    @Column({ nullable: true })
    pressure2: number;

    @Column({ nullable: true })
    rate: number;

    @Column({ nullable: true })
    cumulativeVolume: number;

}
