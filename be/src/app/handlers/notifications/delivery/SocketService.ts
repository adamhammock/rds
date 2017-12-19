export default class SocketService {
  io;

  constructor(io) {
    this.io = io;
  }

  async send(notification) {
    const { payload, queue } = notification;
    return this.io.sockets.emit(queue, payload);
  }
}
