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

import commonActions from '../constants/action-types/common';

const handleApiCallEpic = (action$) => {
  return action$.ofType(commonActions.COMMON_API_CALL)
    .mergeMap(action =>
      Observable.fromPromise(action.promise())
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
          type: action.subtypes.SUCCESS,
          errors
        }))
    );
};

export default handleApiCallEpic;
