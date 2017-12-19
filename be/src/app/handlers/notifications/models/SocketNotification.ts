export default class SocketNotification {
  queue;
  payload;
  
  constructor(data) {
    this.queue = data.queue;
    this.payload = data.payload;;
  }
}
