/* eslint-disable class-methods-use-this */
import defaults from 'lodash/defaults';
import SocketNotification from './../models/SocketNotification';

export default class SocketNotificationBuilder {
  canBuild() {
    return true;
  }

  build(notification) {
    const { payload, queue } = notification.payload;
    return new SocketNotification({ queue, payload });
  }
}
