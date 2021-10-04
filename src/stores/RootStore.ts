import LoginStore from "src/login/stores/LoginStore";
import SignUpStore from "src/signup/store/SignUpStore";
import mockData from "src/mockData";

interface PropTypes {
  LoginStore: LoginStore;
  SignUpStore: SignUpStore;
}

class RootStore implements PropTypes {
  LoginStore = new LoginStore(mockData.personalInfo);
  SignUpStore = new SignUpStore();
}

export default new RootStore();
