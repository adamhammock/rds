export default class SocketNotificationDispatcher {
  notificationType;
  messageBuilder;
  socketService;

  constructor(notificationType, messageBuilder, socketService) {
    this.notificationType = notificationType;
    this.messageBuilder = messageBuilder;
    this.socketService = socketService;
  }

  getType() {
    return this.notificationType;
  }

  async send(socketNotification) {
    await this.socketService.send(socketNotification);
  }

  async createSocketNotification(notification) {
    return this.messageBuilder.build(notification);
  }

  shouldDispatch(notification) {
    return this.messageBuilder.canBuild(notification);
  }

  async dispatch(notification) {
    const shouldDispatch = this.shouldDispatch(notification);

    if (shouldDispatch) {
      const socketNotification = await this.createSocketNotification(notification);
      await this.send(socketNotification);
    }
  }
}
