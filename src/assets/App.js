import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "../client/Routes";

const App = () => {

  console.log(Routes)
  return (
    <Switch>
      {Routes.map((route, i) => <Route key={i} {...route} />)}
    </Switch>
  );
};

export default App;
