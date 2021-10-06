import { set, makeObservable, action } from "mobx";

class SetterModel {
  constructor({ ...params }) {
    makeObservable(this, { setInfo: action });
    if (params) {
      set(this, params);
    }
  }
  setInfo = (key: string, value: any) => {
    this[key] = value;
  };
}

export default SetterModel;
