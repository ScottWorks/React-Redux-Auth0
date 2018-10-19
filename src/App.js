import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { fetchPersonList } from './redux/actions/personListAction';

import ListContainer from './views/ListContainer';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchPersonList();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            xs="6"
          >
            <h1>User List</h1>
            <ListContainer type="USERS" />
          </Col>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            xs="6"
          >
            <h1>Friend List</h1>
            <ListContainer type="FRIENDS" />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPersonList: () => dispatch(fetchPersonList())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
