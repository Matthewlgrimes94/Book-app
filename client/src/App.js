import React from "react";
import {Route, Switch } from 'react-router-dom';
import Books from "./pages/Books";
import Saved from "./pages/Saved";

function App() {
  return (
    <Switch>
      <Route path="/" component={Books} exact />
      <Route path="/saved" component={Saved} />
    </Switch>
  );
}

export default App;
