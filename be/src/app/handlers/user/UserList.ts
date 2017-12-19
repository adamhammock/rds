export default class UserList {
  repository;
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async checkDuplicateUsername(username) {
    const filter = { username };
    return this.repository.findOne(filter);
  }

  async findOne(filter) {
    return this.repository.findOne(filter);
  }

  async search(filters, sort, skip, limit) {
    return this.repository.search(filters, sort, skip, limit);
  }
}

