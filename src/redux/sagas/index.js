import { fork, all } from 'redux-saga/effects';
import demoSaga from './demoSaga';

function* rootSaga(config) {
  yield all([fork(demoSaga)]);
}

export default rootSaga;
