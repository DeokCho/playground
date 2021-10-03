import SignUpModel from "../model/SignUpModel";
import mockData from "../../mockData";

class SignUpStore {
  info = {};

  getInfo = async () => {
    try {
      this.info = new SignUpModel({
        ...mockData.personalInfo,
      });
    } catch (err) {
      console.log("err : ", err);
    }
  };
}

export default SignUpStore;
