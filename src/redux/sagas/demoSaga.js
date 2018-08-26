import { put, takeEvery } from 'redux-saga/effects';
import { actionTypes } from '../../components/ReduxDemo/redux';

function* changePageName(action) {
  try {
    console.log('saga', actionTypes.CHANGE_PAGE_NAME);
    yield put({
      type: 'RESULT',
      data: 'Saga Redux Demo'
    });
  } catch (e) {
    console.log(e);
  }
}

function* demoSaga() {
  yield takeEvery(
    action => action.type === actionTypes.CHANGE_PAGE_NAME,
    changePageName
  );
}

export default demoSaga;
