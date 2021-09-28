import { makeObservable, observable } from "mobx";

class SignUpModel {
  name: string = "";
  password: string = "";
  email: string = "";
  address: string = "";

  constructor(params?: any) {
    makeObservable(this, {
      name: observable,
      password: observable,
      email: observable,
      address: observable,
    });
    if (params) {
      this.name = params.name;
      this.password = params.password;
      this.email = params.email;
      this.address = params.address;
    }
  }
}

export default SignUpModel;
