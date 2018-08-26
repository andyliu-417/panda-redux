import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  page_name: 'Redux Demo'
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PAGE_NAME:
      console.log('reducer', actionTypes.CHANGE_PAGE_NAME);
      return state.set('page_name', 'Reducer Redux Demo');
    case 'RESULT':
      console.log('reducer', 'RESULT');
      return state.set('page_name', action.data);
    default:
      break;
  }
  return state;
};
