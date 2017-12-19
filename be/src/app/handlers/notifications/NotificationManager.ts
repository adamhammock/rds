export default class NotificationManager {
  dispatchers;
  constructor() {
    this.dispatchers = {};
  }

  async registerDispatcher(dispatcher) {
    this.dispatchers[dispatcher.getType()] = this.dispatchers[dispatcher.getType()] || [];
    this.dispatchers[dispatcher.getType()].push(dispatcher);
  }

  async registerDispatchers(dispatchers) {
    dispatchers.array.forEach(dispatcher => this.registerDispatcher(dispatcher));
  }

  async sendNotification(notification) {
    this.dispatchers[notification.getType()].forEach(
      dispatcher => dispatcher.dispatch(notification)
    );
  }
}
