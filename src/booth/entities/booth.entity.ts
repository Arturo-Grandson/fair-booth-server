import { Entity, PrimaryGeneratedColumn, Column, Generated, ManyToMany, OneToMany } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { ComsuptionsEntity } from 'src/comsuptions/entities/comsuptions.entity';

export interface IBooth {
  id: number;
  uuid: string;
  name: string;
}

@Entity({name: 'booth'})
export class BoothEntity implements IBooth{

  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @Column({name: 'uuid'})
  @Generated('uuid')
  uuid: string;

  @Column({name: 'name'})
  name: string;

  @ManyToMany(() => UserEntity, user => user.booths)
  users: UserEntity[];

  @OneToMany(() => ComsuptionsEntity, comsuption => comsuption.booth)
  comsuptions: ComsuptionsEntity[]

}