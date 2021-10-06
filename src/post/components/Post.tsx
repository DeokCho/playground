import React from "react";
import {
  observer,
  useLocalStore,
  useObserver,
} from "mobx-react";

import {
  useInjectStore,
  SearchBar,
  Button,
} from "src/components";
import { CompanyInfo as Company } from "../store/PostStore";

const Post = () => {
  const state = useLocalStore(() => ({ text: "" }));
  const { PostStore } = useInjectStore();
  const {
    viewCompanyList,
    searchList,
    selectCompany,
    selectedCompany,
    setInfo,
  } = PostStore;

  React.useEffect(() => {
    PostStore.getList();
  }, []);

  console.log("푸쉬테스트");

  const SelectedCompanyTr = () => {
    return (
      <tr>
        <td>{selectedCompany.Name}</td>
        <td>{selectedCompany.Code}</td>
        <td>
          <Button
            title="삭제"
            onClick={() =>
              setInfo("selectedCompany", new Company())
            }
          />
        </td>
      </tr>
    );
  };

  const CompanyInfo = () => {
    return useObserver(() => (
      <>
        <SearchBar
          text={state.text}
          onChange={(value) => {
            state.text = value;
          }}
          onClick={() => searchList(state.text)}
        />
        <tr>
          {viewCompanyList.length > 0 &&
            viewCompanyList.map(({ Name, Code }, index) => (
              <tr key={`${Name}${Code}${index}`}>
                <td>{Name}</td>
                <td>{Code}</td>
                <td>
                  <Button
                    title="선택"
                    onClick={() =>
                      selectCompany({
                        Name,
                        Code,
                      })
                    }
                  />
                </td>
              </tr>
            ))}
        </tr>
      </>
    ));
  };

  return (
    <table>
      {selectedCompany.Name ? (
        <SelectedCompanyTr />
      ) : (
        <CompanyInfo />
      )}
    </table>
  );
};

export default observer(Post);
