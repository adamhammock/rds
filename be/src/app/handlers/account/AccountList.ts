export default class AccountList {
  repository;
  constructor(accountRepository) {
    this.repository = accountRepository;
  }

  async findOne(filter) {
    return this.repository.findOne(filter);
  }

  async search(filters, sort, skip, limit) {
    return this.repository.search(filters, sort, skip, limit);
  }
}
