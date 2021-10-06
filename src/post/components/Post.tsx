import React from "react";
import { observer, useLocalStore } from "mobx-react";

import { useInjectStore, SearchBar } from "src/components";

const Post = () => {
  const state = useLocalStore(() => ({ text: "" }));
  const { PostStore } = useInjectStore();
  const { viewCompanyList, searchList } = PostStore;

  React.useEffect(() => {
    PostStore.getList();
  }, []);

  const CompanyInfo = () => {
    return (
      <tr>
        {viewCompanyList.length > 0 &&
          viewCompanyList.map(({ Name, Code }) => (
            <tr>
              <td>{Name}</td>
              <td>{Code}</td>
            </tr>
          ))}
      </tr>
    );
  };

  return (
    <table>
      <SearchBar
        text={state.text}
        onChange={(value) => (state.text = value)}
        onClick={() => searchList(state.text)}
      />
      <CompanyInfo />
    </table>
  );
};

export default observer(Post);
