import Constants from '../etc/Constants';

export default class Account {
  id;
  name;
  ACCOUNT_PENDING_STATUS = Constants.ACCOUNT_PENDING_STATUS;
  ACCOUNT_ACTIVE_STATUS = Constants.ACCOUNT_ACTIVE_STATUS;
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
}
