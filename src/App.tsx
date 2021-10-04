import { Provider, observer } from "mobx-react";
import { Switch, Route, Redirect } from "react-router-dom";
import lodable from "@loadable/component";
import TopBarProgress from "react-topbar-progress-indicator";
import QRCode from "react-qr-code";

import TopBar from "src/topBar/TopBar";
import RootStore from "src/stores/RootStore";
import { useInjectStore } from "src/components/utils";

const SignUpComponent = lodable(
  () => import("src/signup/components/SignUp"),
  { fallback: <TopBarProgress /> },
);

const LoginComponent = lodable(
  () => import("src/login/components/Login"),
  { fallback: <TopBarProgress /> },
);

const App = () => {
  const { LoginStore } = useInjectStore();

  return (
    <Provider store={RootStore}>
      <Switch>
        <Route
          path="/login"
          render={() => <LoginComponent />}
        />
        <Route
          path={"/signup"}
          render={() => <SignUpComponent />}
        />
        <TopBar />
        <Route
          path={"/"}
          exact
          render={() => <div>여기는 홈입니다.</div>}
        />

        <Route
          path={"/qr"}
          render={() => (
            <QRCode value={LoginStore.userUUID} />
          )}
        />
        <Redirect path="*" to="/" />
      </Switch>
    </Provider>
  );
};

export default observer(App);
