import { action, makeObservable, observable } from "mobx";

class LoginStore {
  constructor() {
    makeObservable(this, {
      id: observable,
      password: observable,
      rememberInfo: observable,
      userUUID: observable,
      setInfo: action,
    });
  }
  id = "";
  password = "";
  rememberInfo = false;
  userUUID = "";
  setInfo = (key, value) => {
    this[key] = value;
  };
}

export default LoginStore;
