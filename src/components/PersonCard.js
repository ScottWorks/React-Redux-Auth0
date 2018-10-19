import React from 'react';
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const PersonCard = (props) => {
  const first = props.data.name.first;
  const last = props.data.name.last;
  const state = props.data.location.state;
  const photo = props.data.picture.large;
  const isFriend = props.isFriend;
  const type = props.type;

  switch (type) {
    case 'USERS':
      return (
        <Card style={{ width: '300px', marginBottom: '32px' }}>
          <CardBody>
            <CardTitle>
              {first} {last}
            </CardTitle>
            <CardSubtitle>{state}</CardSubtitle>
          </CardBody>
          <CardImg src={photo} />
          {isFriend ? (
            <Button disabled>Add Friend</Button>
          ) : (
            <Button>Add Friend</Button>
          )}
        </Card>
      );

    case 'FRIENDS':
      return (
        <Card style={{ width: '300px', marginBottom: '32px' }}>
          <CardBody>
            <CardTitle>
              {first} {last}
            </CardTitle>
            <CardSubtitle>{state}</CardSubtitle>
          </CardBody>
          <CardImg src={photo} />
          <Button>Remove Friend</Button>
        </Card>
      );
    default:
      return null;
  }
};

export default PersonCard;
