import * as React from "react";
import * as ReactDOM from "react-dom";

export interface CardProps {
    id: number
    name: string,
    email: string
}

const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="photo" src={`https://robohash.org/${props.id}?200x200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};
export default Card;
