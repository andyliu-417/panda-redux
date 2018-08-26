import { createSelector } from 'reselect';

const selectPageName = state => state.getIn(['reduxDemo', 'page_name']);
export const pageNameSelector = createSelector(selectPageName, item => item);
