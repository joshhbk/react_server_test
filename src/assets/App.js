import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "../client/Routes";

const App = () => {

  return (
    <Switch>
      {Routes.map((route, i) => <Route key={i} {...route} />)}
    </Switch>
  );
};

export default App;
