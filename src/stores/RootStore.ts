import LoginStore from "src/login/stores/LoginStore";

class RootStore {
  LoginStore = new LoginStore();
}

export default new RootStore();
