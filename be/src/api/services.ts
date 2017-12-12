import TypeOrm from './../config/typeorm';

import SocketNotificationType from './../app/handlers/notifications/models/SocketNotificationType';
import NotificationManager from './../app/handlers/notifications/NotificationManager';
import SocketNotificationDispatcher from './../app/handlers/notifications/dispatchers/SocketNotificationDispatcher';
import SocketNotificationBuilder from './../app/handlers/notifications/message-builder/SocketNotificationBuilder';
import SocketService from '../app/handlers/notifications/delivery/SocketService';

import DummyManager from './../app/handlers/dummy/DummyManager';
import DummyList from './../app/handlers/dummy/DummyList';
import DummyRepository from './../app/handlers/dummy/DummyRepository';



import StandardNotification from './../app/handlers/notifications/models/StandardNotification';


export default async function services(container, io) {
  const connection = await (new TypeOrm()).getConnection();
  container.registerService('typeorm.connection', connection);

  container.registerService('io', io);

  const notificationManager = new NotificationManager();

  container.registerService(
    'notification.manager',
    notificationManager
  );

  const socketService = new SocketService(container.get('io'));

  container.registerService(
    'notification.socketService',
    socketService
  );

  container.registerService('dummy.repository', new DummyRepository(connection));
  container.registerService('dummy.manager', new DummyManager(container.get('dummy.repository')));
  container.registerService('dummy.list', new DummyList(container.get('dummy.repository')));

  notificationManager.registerDispatcher(new SocketNotificationDispatcher(
    SocketNotificationType.MY_DUMMY_TYPE,
    new SocketNotificationBuilder(),
    container.get('notification.socketService')
  ));

  const notification = new StandardNotification(SocketNotificationType.MY_DUMMY_TYPE, {queue: 'test', payload: {}})
  await notificationManager.sendNotification(notification)
};
