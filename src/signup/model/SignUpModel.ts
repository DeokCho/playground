import { makeObservable, observable } from "mobx";

import { SetterModel } from "src/models";

class SignUpModel extends SetterModel {
  constructor(params?: any) {
    super(params);
    makeObservable(this, {
      name: observable,
      password: observable,
      email: observable,
      address: observable,
      uuid: observable,
      toggle: observable,
    });
  }
  name: string = "";
  password: string = "";
  email: string = "";
  address: string = "";
  uuid: string = "";
  toggle: boolean = false;
}

export default SignUpModel;
