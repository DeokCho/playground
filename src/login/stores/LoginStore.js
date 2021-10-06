import { action, makeObservable, observable } from "mobx";
import { uuid } from "uuidv4";

class LoginStore {
  constructor(params) {
    makeObservable(this, {
      id: observable,
      password: observable,
      rememberInfo: observable,
      userUUID: observable,
      loginComplete: observable,
      setInfo: action,
      resetUUid: action,
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
  resetUUid = () => {
    this.userUUID = uuid();
  };
}

export default LoginStore;
