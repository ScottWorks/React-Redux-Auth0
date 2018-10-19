import React from 'react';
import { connect } from 'react-redux';

import PersonList from '../components/PersonList';

class ListContainer extends React.Component {
  render() {
    return <PersonList {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  personList: state.personList
});

export default connect(mapStateToProps)(ListContainer);
