import * as React from "react";
import * as ReactDOM from "react-dom";
import Card from "./Card";
import {CardProps} from "./Card";



const RobotCards = ({robots}: {robots: Array<CardProps>}) => {


  return robots.map((robot, index) => {
    return (
      <Card key={index} name={robot.name} email={robot.email} id={robot.id} />
    );
  });
};
export default RobotCards;
