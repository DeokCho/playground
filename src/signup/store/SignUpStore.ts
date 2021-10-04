import { makeAutoObservable } from "mobx";

import SignUpModel from "src/signup/model/SignUpModel";

class SignUpStore {
  constructor() {
    makeAutoObservable(this);
  }
  info = new SignUpModel();
}

export default SignUpStore;
