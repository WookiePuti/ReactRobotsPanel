import * as React from "react";
import * as ReactDOM from "react-dom";

interface ScrollProps {
    children?: JSX.Element
}

const Scroll: React.FunctionComponent<ScrollProps> = (props:ScrollProps) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
