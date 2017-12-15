import Repository from '../../etc/Repository';
import User from '../../models/User';

export default class UserRepository extends Repository {
  /**
   * @param {Connection} connection
   */
  constructor(connection) {
    super(connection, User);
  }
}
