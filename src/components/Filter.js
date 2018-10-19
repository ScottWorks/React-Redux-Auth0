import React from 'react';
import { Button } from 'reactstrap';

const Filter = ({ property }) => {
  return <Button style={{ margin: '16px' }}>{property}</Button>;
};

export default Filter;
