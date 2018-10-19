import React from 'react';
import { connect } from 'react-redux';

import { toggleFriend } from '../redux/actions/personListActions';

import PersonList from '../components/PersonList';

const ListContainer = (props) => {
  return <PersonList {...props} />;
};

const mapStateToProps = (state) => ({
  personList: state.personListReducer.personList
});

const mapDispatchToProps = (dispatch) => ({
  toggleFriend: (id) => dispatch(toggleFriend(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
