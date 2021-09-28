import SignUpModel from "../model/SignUpModel";

class SignUpStore {
  info = {};

  getInfo = async () => {
    try {
      this.info = new SignUpModel();
    } catch (err) {
      console.log(err);
    }
  };
}

export default SignUpStore;
