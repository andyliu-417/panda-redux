import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreators, selectors } from './redux/';

const ReduxDemo = props => {
  const { page_name, changeName } = props;

  return (
    <Fragment>
      <button onClick={changeName}>change name</button>
      <div> {page_name} </div>
    </Fragment>
  );
};

ReduxDemo.propTypes = {
  page_name: PropTypes.string,
  changeName: PropTypes.func
};

const mapStateToProps = state => {
  return {
    page_name: selectors.pageNameSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: () => {
      dispatch(actionCreators.changePageName());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxDemo);
