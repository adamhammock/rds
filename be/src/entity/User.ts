import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Account } from "./Account";
import { USER_POSITION, USER_ASSET, USER_TYPE } from './../app/etc/Constants';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  position: USER_POSITION;

  @Column({ nullable: true })
  asset: USER_ASSET;

  @Column({ default: USER_TYPE.REGULAR })
  type: USER_TYPE;

  @ManyToOne(type => Account, account => account.users)
  account: Account;

}
