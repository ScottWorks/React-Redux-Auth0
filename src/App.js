import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPersonList } from './redux/actions/index';

import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchPersonList();
  };

  render() {
    console.log(this.props.personList);
    return <div className="App">App</div>;
  }
}

const mapStateToProps = (state) => ({
  personList: state.personList
});

const mapDispatchToProps = (dispatch) => ({
  fetchPersonList: () => dispatch(fetchPersonList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
