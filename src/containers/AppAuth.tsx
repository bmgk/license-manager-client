import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Block } from "baseui/block";

import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

const AppAuth = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Block
        paddingTop="4rem"
        width={["320px", "600px", "1200px"]}
        margin="0 auto"
      >
        <Switch>
          <Route path="/settings" exact>
            <Settings />
          </Route>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Block>
    </BrowserRouter>
  );
};

export default AppAuth;
