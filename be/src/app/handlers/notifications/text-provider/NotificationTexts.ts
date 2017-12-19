const NotificationTextKeys = require('./../models/NotificationTextKeys');

module.exports = {
  /**
   * Email Keys
   */
  /** MY_DUMMY_TYPE */
  [NotificationTextKeys.MY_DUMMY_TYPE_EMAIL_TO]: '{email}',
  [NotificationTextKeys.MY_DUMMY_TYPE_EMAIL_SUBJECT]: 'Dummy Type Notification',
  [NotificationTextKeys.MY_DUMMY_TYPE_EMAIL_CONTENT]: 'Hi {name}. \n\nHere is your dummy type notification.',
  /** MY_DUMMY_TYPE */

  /**
   * SMS Keys
   */

  /** MY_DUMMY_TYPE */
  [NotificationTextKeys.MY_DUMMY_TYPE_SMS_PHONE]: '{phone}',
  [NotificationTextKeys.MY_DUMMY_TYPE_SMS_MESSAGE]: 'Hi {name}. Here is your dummy type notification',
  /** MY_DUMMY_TYPE */


  /**
   * PUSH Keys
   */

  /** MY_DUMMY_TYPE */
  [NotificationTextKeys.MY_DUMMY_TYPE_PUSH_TITLE]: 'Dummy Type Notification',
  [NotificationTextKeys.MY_DUMMY_TYPE_PUSH_MESSAGE]: 'Dummy Type notification coming your way.',
  /** MY_DUMMY_TYPE */

};
