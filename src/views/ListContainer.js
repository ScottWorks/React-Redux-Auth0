import React from 'react';
import { connect } from 'react-redux';

import { toggleFriend } from '../redux/actions/personListActions';
import { BY_FRIENDED, SHOW_ALL } from '../redux/actions/actionTypes';

import PersonList from '../components/PersonList';

const filterPersonList = (personList, currentFilter) => {
  switch (currentFilter) {
    case BY_FRIENDED:
      return personList.filter((elem) => !elem.isFriend);
    case SHOW_ALL:
    default:
      return personList;
  }
};

const ListContainer = (props) => {
  console.log(props);
  return <PersonList {...props} />;
};

const mapStateToProps = (state) => ({
  personList: state.personListReducer.personList,
  filteredPersonList: filterPersonList(
    state.personListReducer.personList,
    state.filterReducer.activeFilter
  )
});

const mapDispatchToProps = (dispatch) => ({
  toggleFriend: (id) => dispatch(toggleFriend(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
