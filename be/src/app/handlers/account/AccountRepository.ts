import Repository from '../../etc/Repository';
import Account from '../../models/Account';


export default class AccountRepository extends Repository {
  constructor(connection) {
    super(connection, Account);
  }
}
