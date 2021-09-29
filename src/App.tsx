import React from "react";
import { Switch, Route } from "react-router-dom";
import lodable from "@loadable/component";

import { Loading } from "src/components";

const SignUpComponent = lodable(
  () => import("src/signup/components/SignUp"),
  { fallback: <Loading /> },
);

const App = () => {
  return (
    <div>
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
