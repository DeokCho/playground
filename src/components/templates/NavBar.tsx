import { ChangeEvent } from "react";
import { observer, useLocalStore } from "mobx-react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Home, Send, Person } from "@material-ui/icons";

const NavBar = () => {
  const state = useLocalStore(() => ({
    tabsLocation: 0,
    setTabsLocation(newTabsLocation: number) {
      this.tabsLocation = newTabsLocation;
    },
  }));
  const { tabsLocation, setTabsLocation } = state;
  const handleChange = (
    event: ChangeEvent<Object>,
    newTabsLocation: number,
  ) => {
    setTabsLocation(newTabsLocation);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={tabsLocation}
          onChange={(event, newTabsLocation) =>
            handleChange(event, newTabsLocation)
          }
          aria-label="Main Tabs"
        >
          <Tab label="메인페이지" icon={<Home />} />
          <Tab label="전송" icon={<Send />} />
          <Tab label="개인정보" icon={<Person />} />
        </Tabs>
      </AppBar>
    </>
  );
};

export default observer(NavBar);
