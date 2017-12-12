/* eslint-disable class-methods-use-this */
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as isNil from 'lodash/isNil';

export default class TypeOrm {
  connection;
  constructor() {
    this.connection = null;
  }

  async connect() {
    try {
      this.connection = await createConnection();
    } catch (e) {
      throw Error('Database connection error');
    }
    return this.connection;
  }

  async getConnection() {
    if (!isNil(this.connection)) {
      return this.connection;
    }
    return this.connect();
  }
}
