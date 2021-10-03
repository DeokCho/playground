import { makeObservable, observable } from "mobx";
import { uuid } from "uuidv4";

class SignUpModel {
  name: string = "";
  password: string = "";
  email: string = "";
  address: string = "";
  uuid: string = "";

  constructor(params?: any) {
    makeObservable(this, {
      name: observable,
      password: observable,
      email: observable,
      address: observable,
      uuid: observable,
    });
    if (params) {
      this.name = params.name;
      this.password = params.password;
      this.email = params.email;
      this.address = params.address;
      this.uuid = uuid();
    }
  }
}

export default SignUpModel;
