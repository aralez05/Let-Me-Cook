import {

  Table,
  Column,
  Model

} from 'sequelize-typescript';

@Table

export class Usuario extends Model {

  @Column
  nombre: string;

  @Column
  password: string;

  @Column
  rol: string;

}