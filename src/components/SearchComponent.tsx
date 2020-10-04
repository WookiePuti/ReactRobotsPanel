import * as React from "react";
import * as ReactDOM from "react-dom";

interface SearchComponentProps {
    setSearchValue(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchComponent: React.FunctionComponent<SearchComponentProps> = (props:SearchComponentProps) => {
  const { setSearchValue } = props;

  return (
    <React.Fragment>
      <div className={"pa2"}>
        <input
          className={"bg-lightest-blue pa3 ba b--green"}
          type={"search"}
          placeholder={"search Robots"}
          onChange={setSearchValue}
        />
      </div>
    </React.Fragment>
  );
};
export default SearchComponent;
