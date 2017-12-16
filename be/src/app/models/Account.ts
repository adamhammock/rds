import { ACCOUNT_PENDING_STATUS, ACCOUNT_ACTIVE_STATUS } from '../etc/Constants';

export default class Account {
  id;
  name;
  PENDING_STATUS = ACCOUNT_PENDING_STATUS;
  ACTIVE_STATUS = ACCOUNT_ACTIVE_STATUS;
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
}
