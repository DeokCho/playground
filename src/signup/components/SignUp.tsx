import React from "react";
import { observer, useLocalStore } from "mobx-react";

import Input from "src/components/atoms/Input";

const SignUp: React.FC = () => {
  const state = useLocalStore(() => ({
    text: "",
    setText: (text: string) => (state.text = text),
  }));
  return (
    <Input
      text={state.text}
      onChange={(value: string) => state.setText(value)}
    />
  );
};

export default observer(SignUp);
