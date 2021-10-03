import React, { useEffect } from "react";
import { observer, useLocalStore } from "mobx-react";
import { uuid } from "uuidv4";
import {
  LabelInput,
  Button,
  Input,
  CheckBox,
} from "src/components";

const hiImg =
  "https://item.kakaocdn.net/do/97454cf911b415ca22d78cf0e1e712aff43ad912ad8dd55b04db6a64cddaf76d";

interface PropTypes {
  tryLogin: any;
}

const Login: React.FC<PropTypes> = ({ tryLogin }) => {
  const state = useLocalStore(() => ({
    id: "",
    password: "",
    uuid: "",
    checked: false,
  }));

  const handdleTryLogin = () => {
    tryLogin(state.id, state.password, uuid());
    rememberInfo(state.checked);
  };

  const handleChecked = (checked: boolean) => {
    state.checked = checked;
  };

  const rememberInfo = (checked: boolean) => {
    state.checked = checked;
    if (checked) {
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          id: state.id,
          password: state.password,
        }),
      );
    } else {
      localStorage.removeItem("userInfo");
    }
  };

  useEffect(() => {
    const getUserInfo = localStorage.getItem("userInfo");
    if (getUserInfo) {
      const userInfo = JSON.parse(getUserInfo);
      state.id = userInfo.id;
      state.password = userInfo.password;
      state.checked = true;
    }
  }, []);
  return (
    <>
      <h2>로그인</h2>
      <form>
        <div>
          <img src={hiImg} alt="이미지" />
        </div>
        <div>
          <LabelInput
            title="아이디"
            placeholder="아이디를 입력하세요"
            text={state.id}
            setText={(value) => {
              state.id = value;
            }}
          />
          <br />
          <LabelInput
            title="비밀번호"
            placeholder="비밀번호를 입력하세요"
            text={state.password}
            setText={(value) => {
              state.password = value;
            }}
            type="password"
          />
          <br />
          <CheckBox
            checked={state.checked}
            title="기억하기"
            onClick={(checked: boolean) =>
              handleChecked(checked)
            }
          />
          <br />
          <br />
          <Button
            title="로그인"
            onClick={handdleTryLogin}
          />
          <br />
          <br />
          <Button title="회원가입" onClick={() => {}} />
          <Button
            title="비밀번호 찾기"
            onClick={() => {}}
          />
        </div>
      </form>
    </>
  );
};

export default observer(Login);
