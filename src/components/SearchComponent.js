import React, { Fragment, useState } from "react";

const SearchComponent = (props) => {
  const { setSearchValue } = props;

  return (
    <Fragment>
      <div className={"pa2"}>
        <input
          className={"bg-lightest-blue pa3 ba b--green"}
          type={"search"}
          placeholder={"search Robots"}
          onChange={setSearchValue}
        />
      </div>
    </Fragment>
  );
};
export default SearchComponent;
