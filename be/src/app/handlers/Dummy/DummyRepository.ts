import Repository from './../../etc/Repository';
import Dummy from './../../models/Dummy';

export default class DummyRepository extends Repository {
  constructor(connection) {
    super(connection, Dummy, {
      findOptions: {}
    });
  }
}
