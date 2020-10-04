import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import RobotCards from "./components/RobotCards";
import SearchComponent from "./components/SearchComponent";
import Scroll from "./components/Scroll";
import { requestRobots, setSearchField } from "./actions";
import ErrorBoundary from "./components/ErrorBoundary";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    allRobots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnRequestRobots: () => dispatch(requestRobots()),
    setSearchValue: (event) => dispatch(setSearchField(event.target.value)),
  };
};

const App = (props) => {
  useEffect(() => {
    console.log("start");
    props.OnRequestRobots();
  }, []);

  const { searchField, allRobots, setSearchValue, isPending } = props;

  const robots = allRobots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase().trim());
  });

  return (
    <div className={"tc"}>
      <h1>Robots</h1>
      <SearchComponent setSearchValue={setSearchValue} />
      <Scroll>
        {isPending ? (
          <h1>Loading</h1>
        ) : (
          <ErrorBoundary>
            <RobotCards robots={robots} />
          </ErrorBoundary>
        )}
      </Scroll>
      ;
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
