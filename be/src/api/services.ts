import TypeOrm from './../config/typeorm';

import * as Constants from './../app/etc/Constants';

import SocketNotificationType from './../app/handlers/notifications/models/SocketNotificationType';
import NotificationManager from './../app/handlers/notifications/NotificationManager';
import SocketNotificationDispatcher from './../app/handlers/notifications/dispatchers/SocketNotificationDispatcher';
import SocketNotificationBuilder from './../app/handlers/notifications/message-builder/SocketNotificationBuilder';
import SocketService from '../app/handlers/notifications/delivery/SocketService';

import DummyManager from './../app/handlers/dummy/DummyManager';
import DummyList from './../app/handlers/dummy/DummyList';
import DummyRepository from './../app/handlers/dummy/DummyRepository';

import AccountList from './../app/handlers/account/AccountList';
import AccountManager from './../app/handlers/account/AccountManager';
import AccountRepository from './../app/handlers/account/AccountRepository';

import UserList from './../app/handlers/user/UserList';
import UserManager from './../app/handlers/user/UserManager';
import UserRepository from './../app/handlers/user/UserRepository';

import StandardNotification from './../app/handlers/notifications/models/StandardNotification';

export default async function services(container, io) {
  const connection = await (new TypeOrm()).getConnection();
  container.registerService('typeorm.connection', connection);

  container.registerService('Constants', Constants);

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
  const dummyList = container.get('dummy.list');
  const dummy = await dummyList.findOne();
  let id = dummy.id;
  setInterval(async () => {
    const dummy = await dummyList.findOne({ id });
    id = dummy.id + 1;
    console.log('dummy', dummy);
    socketService.send({
      queue: 'dashboard.chart', payload: [(new Date()).getTime(), dummy.pressure]
    });
  }, 2000);

  container.registerService('account.repository', new AccountRepository(connection));
  container.registerService('account.manager', new AccountManager(container.get('account.repository')));
  container.registerService('account.list', new AccountList(container.get('account.repository')));

  container.registerService('user.repository', new UserRepository(connection));
  container.registerService('user.manager', new UserManager(container.get('user.repository')));
  container.registerService('user.list', new UserList(container.get('user.repository')));

  notificationManager.registerDispatcher(new SocketNotificationDispatcher(
    SocketNotificationType.MY_DUMMY_TYPE,
    new SocketNotificationBuilder(),
    container.get('notification.socketService')
  ));
};
