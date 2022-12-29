import React, { Fragment } from "react";

import "./App.css";

import Users from "./components/Users/Users.jsx";
// import Wrapper from "./components/Helpers/Wrapper.jsx";

const App = () => {
  /* return (
    <Wrapper>
      <Users />
    </Wrapper>
  ); */
  return (
    <Fragment>
      <Users/>
    </Fragment>
  )
};

export default App;
