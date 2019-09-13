import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink
  } from 'reactstrap';

const StarCard = props => {
        return (
            <div>
              <Card>
                <CardImg top width="100%" src="https://images-na.ssl-images-amazon.com/images/I/71q98aXxhJL._UL1500_.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{props.name}</CardTitle>
                  <CardSubtitle>Description</CardSubtitle>
                  <CardText>{props.height}</CardText>
                  <CardText>{props.mass}</CardText>
                  <CardText>{props.hair_color}</CardText>
                  <CardText>{props.skin_color}</CardText>
                  <CardText>{props.eye_color}</CardText>
                  <CardText>{props.birth_year}</CardText>
                </CardBody>
              </Card>
            </div>
    );
};


export default StarCard;