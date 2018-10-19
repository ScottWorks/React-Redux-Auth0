import React from 'react';
import { connect } from 'react-redux';

import Filter from '../components/Filter';

import { filters, setFilter } from '../redux/actions/filterAction';

const FilterContainer = (props) => {
  let propArray = [];
  for (let property in filters) {
    propArray.push({ [property]: filters[property] });
  }

  return propArray.map((elem, i) => {
    return <Filter {...props} key={i} property={elem} />;
  });
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter))
});

export default connect(
  null,
  mapDispatchToProps
)(FilterContainer);
