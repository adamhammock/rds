import { Observable } from 'rxjs/Observable';
import io from 'socket.io-client';

const host = 'http://192.168.33.10:3000';
const socketPath = '/socket.io';
let socket;

export const connect = () => {
  socket = io.connect(host, { path: socketPath });
  return new Promise((resolve, reject) => {
    socket.on('connect', () => resolve());
    socket.on('connect_error', (error) => reject(error));
  });
}


export const disconnect = () => {
  return new Promise((resolve) => {
    socket.disconnect(() => {
      socket = null;
      resolve();
    });
  });
}

export const emit = (event, data) => {
  return new Promise((resolve, reject) => {
    if (!socket) return reject('No socket connection.');

    return socket.emit(event, data, (response) => {
      if (response.error) {
        return reject(response.error);
      }

      return resolve();
    });
  });
}

export const on = (event) => {
  // No promise is needed here, but we're expecting one in the middleware.
  return Observable.fromEvent(socket, event)
}
