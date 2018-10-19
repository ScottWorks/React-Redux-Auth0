import React from 'react';

import Filter from '../components/Filter';

import { filters } from '../redux/actions/filterAction';

const FilterContainer = () => {
  let propArray = [];
  for (let property in filters) {
    propArray.push(filters[property]);
  }

  return propArray.map((elem, i) => {
    return <Filter key={i} property={elem} />;
  });
};

export default FilterContainer;
