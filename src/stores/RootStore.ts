import LoginStore from "src/login/stores/LoginStore";
import SignUpStore from "src/signup/store/SignUpStore";
import PostStore from "src/post/store/PostStore";
import mockData from "src/mockData";

interface PropTypes {
  LoginStore: LoginStore;
  SignUpStore: SignUpStore;
  PostStore: PostStore;
}

class RootStore implements PropTypes {
  LoginStore = new LoginStore(mockData.personalInfo);
  SignUpStore = new SignUpStore();
  PostStore = new PostStore();
}

export default new RootStore();
