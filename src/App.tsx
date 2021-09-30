import React from "react";
import { Switch, Route } from "react-router-dom";
import lodable from "@loadable/component";
import TopBarProgress from "react-topbar-progress-indicator";

import Navbar from "src/components/templates/NavBar";

const SignUpComponent = lodable(
  () => import("src/signup/components/SignUp"),
  { fallback: <TopBarProgress /> },
);

const App = () => {
  return (
    <div>
      <div>탑바</div>
      <Navbar />
      <div>사이드바</div>
      <Switch>
        <Route
          path={"/"}
          exact
          render={() => <div>여기는 홈입니다.</div>}
        />
        <Route
          path={"/signup"}
          component={SignUpComponent}
        />
      </Switch>
    </div>
  );
};

export default App;
