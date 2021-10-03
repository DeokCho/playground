import { useEffect } from "react";
import {
  Provider,
  useLocalStore,
  observer,
} from "mobx-react";
import { Switch, Route } from "react-router-dom";
import lodable from "@loadable/component";
import TopBarProgress from "react-topbar-progress-indicator";
import TopBar from "src/topBar/TopBar";
import QRCode from "react-qr-code";
import Login from "src/login/components/Login";

const SignUpComponent = lodable(
  () => import("src/signup/components/SignUp"),
  { fallback: <TopBarProgress /> },
);

const App = () => {
  const state = useLocalStore(() => ({
    loginComplete: false,
    uuid: "",
  }));
  const loginCheck = (vaild: boolean, uuid: string) => {
    if (vaild) {
      state.loginComplete = true;
      state.uuid = uuid;
      console.log("uuid : ", uuid);
    }
    // localStorage.getItem("");
  };
  useEffect(() => {}, []);
  return (
    <Provider>
      {!state.loginComplete ? (
        <Login
          tryLogin={(
            id: string,
            password: string,
            uuid: string,
          ) =>
            loginCheck(
              Boolean(id && password && uuid),
              uuid,
            )
          }
        />
      ) : (
        <div>
          <TopBar />
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
            <Route
              path={"/qr"}
              render={() => <QRCode value="test" />}
            />
          </Switch>
        </div>
      )}
    </Provider>
  );
};

export default observer(App);
