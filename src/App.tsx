import { Provider, observer } from "mobx-react";
import { Switch, Route, Redirect } from "react-router-dom";
import lodable from "@loadable/component";
import TopBarProgress from "react-topbar-progress-indicator";

import TopBar from "src/topBar/TopBar";
import RootStore from "src/stores/RootStore";

const SignUpComponent = lodable(
  () => import("src/signup/components/SignUp"),
  { fallback: <TopBarProgress /> },
);

const LoginComponent = lodable(
  () => import("src/login/components/Login"),
  { fallback: <TopBarProgress /> },
);

const QrComponent = lodable(
  () => import("src/qr/components/Qr"),
  { fallback: <TopBarProgress /> },
);

const PostComponent = lodable(
  () => import("src/post/components/Post"),
  { fallback: <TopBarProgress /> },
);

const App = () => {
  return (
    <Provider store={RootStore}>
      <TopBar />
      <Switch>
        <Route
          path="/login"
          render={() => <LoginComponent />}
        />
        <Route
          path={"/signup"}
          render={() => <SignUpComponent />}
        />
        <Route
          path={"/"}
          exact
          render={() => <div>여기는 홈입니다.</div>}
        />

        <Route
          path={"/qr"}
          render={() => <QrComponent />}
        />

        <Route
          path={"/post"}
          render={() => <PostComponent />}
        />
        <Redirect path="*" to="/" />
      </Switch>
    </Provider>
  );
};

export default observer(App);
