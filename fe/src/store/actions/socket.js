import * as socketAPI from '../../utils/services/socket-service';
import socketActions from '../constants/action-types/socket';

export const connectSocket = (params, onSuccessCallback) => ({
  type: socketActions.SOCKET_CONNECT_CALL,
  subtypes: socketActions.CONNECT,
  promise: () => socketAPI.connect(),
  onSuccessCallback: (payload) => onSuccessCallback(payload)
});

export const on = (params, onSuccessCallback) => ({
  type: socketActions.SOCKET_ON_CALL,
  subtypes: socketActions.ON,
  promise: () => socketAPI.on(params),
  onSuccessCallback: (payload) => onSuccessCallback(payload)
});

export const disconnectSocket = (params, onSuccessCallback) => ({
  type: socketActions.SOCKET_DISCONNET_CALL,
  subtypes: socketActions.DISCONNECT,
  promise: () => socketAPI.disconnect(),
  onSuccessCallback: (payload) => onSuccessCallback(payload)
});
