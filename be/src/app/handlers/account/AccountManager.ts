import * as merge from 'lodash/merge';

export default class AccountManager {
  repository;
  constructor(accountRepository) {
    this.repository = accountRepository;
  }

  async registerAccount(data) {
    return this.repository.save(data);
  }

  async updateAccountById(id, data) {
    let account = this.repository.findOne(id);
    account = merge(account, data);
    return this.repository.save(account);
  }
}
