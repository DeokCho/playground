import { action, makeObservable, observable } from "mobx";

class LoginStore {
  constructor(params) {
    makeObservable(this, {
      id: observable,
      password: observable,
      rememberInfo: observable,
      userUUID: observable,
      loginComplete: observable,
      setInfo: action,
    });
    if (params) {
      this.info = params;
    }
  }
  info = {};
  id = "";
  password = "";
  rememberInfo = false;
  userUUID = "";
  loginComplete = false;
  setInfo = (key, value) => {
    this[key] = value;
  };
}

export default LoginStore;
