export default class Container {
  services;
  constructor() {
    this.services = {};
  }
  
  has(id) {
    return !!this.services[id];
  }
  
  registerService(id, service) {
    this.services[id] = service;
  }
  
  get(id) {
    if (!this.services[id]) {
      // throw new InvalidArgumentError(`Service with id '${id}' not found`);
      throw new Error(`Service with id '${id}' not found`);
    }

    return this.services[id];
  }
}
