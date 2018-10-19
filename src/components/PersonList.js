import React from 'react';

import PersonCard from './PersonCard';

const PersonList = (props) => {
  if (props.personList) {
    switch (props.type) {
      case 'USERS':
        return props.personList.map((elem, i) => {
          return (
            <PersonCard
              {...elem}
              key={i}
              toggleFriend={() => props.toggleFriend(elem.id)}
              type={props.type}
            />
          );
        });
      case 'FRIENDS':
        return props.personList.map((elem, i) => {
          if (elem.isFriend)
            return (
              <PersonCard
                {...elem}
                key={i}
                toggleFriend={() => props.toggleFriend(elem.id)}
                type={props.type}
              />
            );
        });
      default:
        return null;
    }
  }

  return null;
};

export default PersonList;
