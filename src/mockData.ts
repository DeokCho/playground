import { AppBar, Tabs, Tab } from "@material-ui/core";

export default {
  personalInfo: {
    name: "홍길동",
    password: "123456",
    email: "abc@naver.com",
    address: "인천광역시",
  },
  sideBarData: [
    {
      title: "검사하기",
      path: "/ToExamine",
      Icon: AppBar,
    },
    {
      title: "Home",
      path: "/",
      Icon: AppBar,
    },
    {
      title: "About",
      path: "/About",
      Icon: AppBar,
    },
    {
      title: "Contact Us",
      path: "/Contact",
      Icon: AppBar,
    },
  ],
};
