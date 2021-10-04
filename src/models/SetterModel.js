import { makeObservable, action } from "mobx";

class SetterModel {
  constructor(params) {
    makeObservable(this, {
      setInfo: action,
    });
  }
  setInfo = (key, value) => {
    this[key] = value;
  };
}

export default SetterModel;
