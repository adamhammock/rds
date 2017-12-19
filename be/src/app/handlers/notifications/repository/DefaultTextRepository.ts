/* eslint-disable class-methods-use-this, comma-dangle */
const notificationTexts = require('./../text-provider/NotificationTexts');

class DefaultTextRepository {
  fetchValueByKey(key) {
    return notificationTexts[key] || null;
  }
}

module.exports = DefaultTextRepository;
