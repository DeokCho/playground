import React from "react";
import { Form } from "reactstrap";
import { useHistory } from "react-router";
import { observer } from "mobx-react";

import {
  LabelInput,
  Button,
  useInjectStore,
  CommonModal,
} from "src/components";

import Post from "src/components/organisms/Post";

const SignUp: React.FC = () => {
  const { SignUpStore } = useInjectStore();
  const { info } = SignUpStore;
  const {
    name,
    password,
    email,
    address,
    setInfo,
    toggle,
  } = info;
  const history = useHistory();
  return (
    <Form>
      <LabelInput
        title={"이름"}
        text={name}
        setText={(value) => setInfo("name", value)}
      />
      <br />
      <LabelInput
        title={"패스워드"}
        type="password"
        text={password}
        setText={(value) => setInfo("password", value)}
      />
      <br />
      <LabelInput
        title={"이메일"}
        text={email}
        setText={(value) => setInfo("email", value)}
      />
      <br />
      <LabelInput title={"주소"} text={address} disabled />
      <br />
      <Button
        title={toggle === false ? "주소검색" : "닫기"}
        onClick={() => {
          setInfo("toggle", !toggle);
        }}
      />
      <br />
      {toggle && (
        <CommonModal
          isOpen={toggle}
          toggle={() => setInfo("toggle", !toggle)}
        >
          <Post
            onClick={(fullAdress: string) => {
              setInfo("address", fullAdress);
            }}
          />
        </CommonModal>
      )}
      <Button
        title="완료"
        onClick={() => history.push("/login")}
      ></Button>
    </Form>
  );
};

export default observer(SignUp);
