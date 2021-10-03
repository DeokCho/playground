import React from "react";
import { observer, useLocalStore } from "mobx-react";
import { Link } from "react-router-dom";

import "src/topBar/TopBar.css";
import mockData from "src/mockData";

const TopBar = () => {
  const state = useLocalStore(() => ({
    active: "active",
    title: "Home",
  }));

  const setColor = (title: string) => {
    state.title = title;
  };

  const colorCSS = (title: string) =>
    state.title === title ? state.active : "";

  return (
    <div className="topnav">
      {mockData.navData.map(({ title, url }) => (
        <Link to={url} key={title}>
          <span
            className={colorCSS(title)}
            onClick={() => setColor(title)}
          >
            {title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default observer(TopBar);
