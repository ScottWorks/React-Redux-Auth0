import React from 'react';
import { Button } from 'reactstrap';

const Filter = ({ property, setFilter }) => {
  return (
    <Button
      onClick={() => setFilter(Object.keys(property)[0])}
      style={{ margin: '16px' }}
    >
      {Object.values(property)}
    </Button>
  );
};

export default Filter;
