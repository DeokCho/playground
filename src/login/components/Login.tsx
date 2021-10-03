import React, {
  useEffect,
  useContext,
  createContext,
} from "react";
import { observer, useLocalStore } from "mobx-react";
import { uuid } from "uuidv4";
import {
  LabelInput,
  Button,
  CheckBox,
  useInjectStore,
} from "src/components";

const hiImg =
  "https://item.kakaocdn.net/do/97454cf911b415ca22d78cf0e1e712aff43ad912ad8dd55b04db6a64cddaf76d";

interface PropTypes {
  tryLogin: any;
}

const Login: React.FC<PropTypes> = ({ tryLogin }) => {
  const { LoginStore } = useInjectStore();
  const { id, password, rememberInfo, userUUID, setInfo } =
    LoginStore;

  const handdleTryLogin = () => {
    tryLogin(id, password, uuid());
    setRememberInfo(rememberInfo);
  };

  const handleChecked = (checked: boolean) => {
    setInfo("rememberInfo", checked);
  };

  const setRememberInfo = (checked: boolean) => {
    setInfo("rememberInfo", checked);
    if (checked) {
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          id: id,
          password: password,
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
      setInfo("id", userInfo.id);
      setInfo("password", userInfo.password);
      setInfo("rememberInfo", true);
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
            placeholder="아이디를 입력 하세요"
            text={id}
            setText={(value) => {
              setInfo("id", value);
            }}
          />
          <br />
          <LabelInput
            title="비밀번호"
            placeholder="비밀번호를 입력하세요"
            text={password}
            setText={(value) => {
              setInfo("password", value);
            }}
            type="password"
          />
          <br />
          <CheckBox
            checked={rememberInfo}
            title="기억하기"
            onClick={handleChecked}
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
