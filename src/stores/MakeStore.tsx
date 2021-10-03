import React, { createContext, useContext } from "react";

import { observer } from "mobx-react";

interface AllContext {}

export const CounterContext = createContext<AllContext>(
  {} as AllContext,
);

const GlobalProvider = ({ children }: any) => {
  return (
    <CounterContext.Provider value={""}>
      {children}
    </CounterContext.Provider>
  );
};

export default observer(GlobalProvider);
