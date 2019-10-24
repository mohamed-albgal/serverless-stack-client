import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      	{ /* any route that is not matched, gets the page */ }
		<Route component={NotFound} />
    </Switch>

  );
}