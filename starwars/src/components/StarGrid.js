import React, { useState, useEffect } from "react";
// import Card_Space from "./Card_Space";
import axios from "axios";
import StarCard from "./StarCard";
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';


export default function CardGrid() {
    const [spaceCard, setSpaceCard] = useState({});
    const [person, setPerson] = useState("person/1/");

    useEffect(() => {
        axios 
            .get(`https://swapi.co/api/people/`)

            .then (response => {
                console.log(response.data.results)
                let characterInfo = [];
                response.data.results.map(e => {
                    return characterInfo = (e);
                });
                // response.data.results.map(e =>{
                // });
                console.log('new data', characterInfo)
                setSpaceCard(characterInfo);
            })

            .catch(error => {
                console.log("did not get info", error);
            })
            },[]);

            return(
                <div>
                    {[spaceCard].map(item => {
                        console.log(item)
                        return(
                            <StarCard
                            name={item.name}
                            height={item.height}
                            mass={item.mass}
                            hair_color={item.hair_color}
                            skin_color={item.skin_color}
                            eye_color={item.eye_color}
                            birth_year={item.birth_year}
                            />
                        )
                    })}
                </div>
            )
}


