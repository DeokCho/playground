import {
  makeObservable,
  action,
  observable,
  toJS,
  set,
} from "mobx";

import postApis from "src/post/components/apis/PostApis";

export class CompanyInfo {
  constructor(params?: CompanyInfo) {
    makeObservable(this, {
      Name: observable,
      Code: observable,
    });
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
      selectedCompany: observable,
      getList: action,
      searchList: action,
      selectCompany: action,
      setInfo: action,
    });
  }

  companyList: CompanyInfo[] = [];
  viewCompanyList: CompanyInfo[] = [];
  selectedCompany: CompanyInfo = new CompanyInfo();

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

  selectCompany = (params: CompanyInfo) => {
    this.selectedCompany = new CompanyInfo(params);
  };

  setInfo = (key: string, value: any) => {
    this[key] = value;
  };
}

export default PostStore;
