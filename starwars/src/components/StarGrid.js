import React, { useState, useEffect } from "react";
import Card_Space from "./Card_Space";
import axios from "axios";
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';


export default function CardGrid() {
    const [spaceCard, setSpaceCard] = useState({});
    const [person, setPerson] = useState("person/1/");

    useEffect(() => {
        axios 
            .get(`https://swapi.co/api/people/4/`)

            .then(response => {
                const characterInfo = response.data;
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
                        //console.log(Card_Space)
                        return(
                            <Card_Space 
                            copyright={item.title}
                            hdurl={item.hdurl}
                            date={item.date}
                            explanation={item.explanation}
                            />
                        )
                    })}
                </div>
            )
}
