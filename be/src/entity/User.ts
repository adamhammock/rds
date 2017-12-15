import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 *
    - Position(completions, reservoir, production, data manager, upper management, technology, etc)
    - Asset / Play(eagleford, Permian, STACK / Scoop, Marcellus, Utica, Bakken, etc)
 */
enum Position {
  COMPLETIONS = 'completions',
  RESERVOIR = 'reservoir',
  PRODUCTION = 'production',
  DATA_MANAGER = 'data manager',
  UPPER_MANAGER = 'upper management',
  TECHNOLOGY = 'technology',
}

enum Asset {
  EAGLEFORD = 'eagleford',
  PERMIAN = 'permian',
  STACK_SCOOP = 'stack / scoop',
  MARCELUS = 'marcellus',
  UTICA = 'utica',
  BAKKER = 'bakken'
}

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
  position: Position;

  @Column({ nullable: true })
  asset: Asset;

}
