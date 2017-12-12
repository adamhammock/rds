export default class DummyList {
  repository;

  constructor(dummyRepository) {
    this.repository = dummyRepository;
  }

  async findOne(filter) {
    return this.repository.findOne(filter);
  }

  async search(filters, sort, skip, limit) {
    return this.repository.search(filters, sort, skip, limit);
  }
}

