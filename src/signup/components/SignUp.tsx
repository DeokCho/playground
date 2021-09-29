import React from "react";
import { Form, FormGroup, Label } from "reactstrap";
import { observer, useLocalStore } from "mobx-react";

import { Input, LabelInput } from "src/components";
import SignUpStore from "src/signup/store/SignUpStore";

const SignUp: React.FC = () => {
  const state = useLocalStore(() => ({
    text: "",
    setText: (text: string) => (state.text = text),
  }));
  const Store = React.useMemo(() => new SignUpStore(), []);

  React.useEffect(() => {
    Store.getInfo();
  }, []);

  return (
    <Form>
      <LabelInput
        title={"이름"}
        text={state.text}
        setText={(value: string) => state.setText(value)}
      />
    </Form>
  );
};

export default observer(SignUp);
