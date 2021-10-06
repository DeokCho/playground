import {
  makeObservable,
  makeAutoObservable,
  action,
  observable,
  set,
  toJS,
} from "mobx";

import postApis from "src/post/components/apis/PostApis";

class CompanyInfo {
  constructor(params?: CompanyInfo) {
    makeAutoObservable(this);
    if (params) {
      set(this, params);
    }
  }
  Name: string = "";
  Code: string = "";
}

class PostStore {
  constructor() {
    makeObservable(this, {
      companyList: observable,
      viewCompanyList: observable,
      getList: action,
      searchList: action,
    });
  }
  companyList: CompanyInfo[] = [];
  viewCompanyList: CompanyInfo[] = [];
  getList = async () => {
    try {
      const { data } = await postApis.getCompanyList();
      this.companyList = toJS(
        data.Company.map(
          (data: any) => new CompanyInfo(data),
        ),
      );
      this.viewCompanyList = [...this.companyList];
    } catch (err) {}
  };
  searchList = (text: string) => {
    this.viewCompanyList = this.companyList.filter(
      ({ Name }) =>
        Name.toUpperCase().includes(text.toUpperCase()),
    );
  };
}

export default PostStore;
