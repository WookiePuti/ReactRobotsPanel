import React, { useEffect } from "react";
import Card from "./Card";

const RobotCards = (props) => {
  const { robots } = props;

  return robots.map((robot, index) => {
    return (
      <Card key={index} name={robot.name} email={robot.email} id={robot.id} />
    );
  });
};
export default RobotCards;
