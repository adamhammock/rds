/*
|-------------------------------------------------------------------------------
| TODO {Abdelghafour}: RXJS Operator
|-------------------------------------------------------------------------------
| try to not import all operators
| refer to: http://goo.gl/4ZlYeC
|-------------------------------------------------------------------------------
*/
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import _ from 'lodash';

import socketActions from '../constants/action-types/socket';

export const socketConnectEpic = (action$) => action$.ofType(socketActions.SOCKET_CONNECT_CALL)
  .mergeMap(action => Observable.fromPromise(action.promise())
    .map((payload) => {
      if (action.onSuccessCallback && _.isFunction(action.onSuccessCallback)) {
        action.onSuccessCallback(payload);
      }
      return {
        type: action.subtypes.SUCCESS,
        payload,
      }
    })
    .catch(errors => Observable.of({
      type: action.subtypes.FAIL,
      errors
    }))
  );;

export const socketOnEpic = (action$) => action$.ofType(socketActions.SOCKET_ON_CALL)
  .mergeMap(action => action.promise()
    .map((payload) => {
      if (action.onSuccessCallback && _.isFunction(action.onSuccessCallback)) {
        action.onSuccessCallback(payload);
      }
      return {
        type: action.subtypes.SUCCESS,
        payload,
      }
    })
    .catch(errors => Observable.of({
      type: action.subtypes.FAIL,
      errors
    }))
  );


