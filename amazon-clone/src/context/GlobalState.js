import { createContext, useContext, useReducer } from "react";
import AppReducer, { initialState } from "./AppReducer";

const GlobalContext = createContext();

// Func will be called to fetch any data from passed values by construction
export const useAuth = () => {
  return useContext(GlobalContext);
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      // Values provider will provide
      value={{
        basket: state.basket,
        user: state.user,
        favorites: state.favorites,
        dispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
