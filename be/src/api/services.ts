import TypeOrm from './../config/typeorm';

import DummyManager from './../app/handlers/dummy/DummyManager';
import DummyList from './../app/handlers/dummy/DummyList';
import DummyRepository from './../app/handlers/dummy/DummyRepository';


export default async function services(container) {
  const connection = await(new TypeOrm()).getConnection();

  container.registerService('dummy.repository', new DummyRepository(connection));
  container.registerService('dummy.manager', new DummyManager(container.get('dummy.repository')));
  container.registerService('dummy.list', new DummyList(container.get('dummy.repository')));
};
