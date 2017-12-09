import { takeEvery, call, put } from 'redux-saga/effects';
import _ from 'lodash';

import commonActions from '../constants/action-types/common';


function* handleApiCall(action) {
  const { promise, onSuccessCallback, placeholderData } = action;
  const { START, SUCCESS, FAIL } = action.subtypes;

  yield put({ type: START });

  try {
    const response = yield call(promise);

    // Parse server response data
    const result = yield response.data;
    yield put({
      type: SUCCESS,
      payload: result,
    });

    if (onSuccessCallback && _.isFunction(onSuccessCallback)) {
      yield call(onSuccessCallback, result);
    }
  } catch (errors) {
    yield put({ type: FAIL, errors });
  }
}

export default function* () {
  yield takeEvery(commonActions.COMMON_API_CALL, handleApiCall);
}
