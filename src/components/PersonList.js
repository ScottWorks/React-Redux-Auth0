import React from 'react';

import PersonCard from './PersonCard';

const PersonList = (props) => {
  switch (props.type) {
    case 'USERS':
      return props.personList
        ? props.personList.map((elem, i) => {
            return <PersonCard {...elem} key={i} type={props.type} />;
          })
        : null;
    case 'FRIENDS':
      return props.personList
        ? props.personList.filter((elem, i) => {
            return elem.isFriend ? (
              <PersonCard {...elem} key={i} type={props.type} />
            ) : null;
          })
        : null;
    default:
      return null;
  }
};

export default PersonList;
