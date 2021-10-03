import { createContext, useContext } from "react";

import RootStore from "src/stores/RootStore";

const useInjectStore = () => {
  const makeContext = createContext(RootStore);
  return { ...useContext(makeContext) };
};

export default useInjectStore;
