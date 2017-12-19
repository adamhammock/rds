import { USER_PENDING_STATUS, USER_ACTIVE_STATUS } from '../etc/Constants';

export default class User {
  id;
  name;
  username;
  password;
  birthday;
  sex;
  city;
  position;
  state;
  asset;
  PENDING_STATUS = USER_PENDING_STATUS;
  ACTIVE_STATUS = USER_ACTIVE_STATUS;
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.password = data.password;
    this.name = data.name;
    this.birthday = data.birthday;
    this.sex = data.sex;
    this.city = data.city;
    this.state = data.state;
    this.position = data.position;
    this.asset = data.asset;
  }
}