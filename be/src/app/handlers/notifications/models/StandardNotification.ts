export default class StandardNotification {
  type;
  payload;
  meta;
  constructor(type, payload = {}, meta = {}) {
    this.type = type;
    this.payload = payload;
    this.meta = meta;
  }

  getType() {
    return this.type;
  }
}
