import * as merge from 'lodash/merge';
import * as isNil from 'lodash/isNil';

export default class Repository {
  connection;
  repository;
  EntityClass;
  options;

  constructor(connection, EntityClass, options = {}) {
    this.connection = connection;
    this.repository = this.connection.getRepository(EntityClass.name);
    this.EntityClass = EntityClass;
    this.options = merge({
      findOptions: {
        alias: 'item',
        leftJoin: {},
        leftJoinAndSelect: {}
      }
    }, options);
  }
  
  async findOne(criteria = {}) {
    const object = await this.repository.findOne(criteria);
    return isNil(object) ? null : object;
  }
  
  async find(criteria = {}) {
    const result = await this.repository.find(criteria);
    return result;
  }
  
  async save(object) {
    const result = await this.repository.save(object);
    return result;
  }
  
  async remove(object) {
    const result = await this.repository.remove(object);
    return result;
  }
  
  async search(filters = {}, sort = {}, offset = null, limit = null) {
    let qb = this.repository.createQueryBuilder(this.options.findOptions.alias);
    qb = qb
      .offset(offset)
      .limit(limit);
    // .orderBy(`${this.options.findOptions.alias}.name`, 'DESC')

    const keys = Object.keys(filters);
    keys.forEach((key) => {
      const filter = {};
      filter[key] = filters[key];
      qb = qb.andWhere(`item.${key} = :${key}`, filter);
    });

    const result = await qb.getMany();

    return result;
  }
}
