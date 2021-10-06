import { axiosModule } from "src/components/utils";

const postApis = {
  getCompanyList: () =>
    axiosModule(
      "get",
      "http://info.sweettracker.co.kr/api/v1/companylist",
      { t_key: "Z2KaZopg1at4rjekq6Iw3g" },
    ),
};

export default postApis;
