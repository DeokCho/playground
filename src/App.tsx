import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "src/signup/components/SignUp";

const App = () => {
  return (
    <div>
      <Switch>
        <Route
          path={"/"}
          exact
          render={() => <div>여기는 홈입니다.</div>}
        />
        <Route path={"/signup"} component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
