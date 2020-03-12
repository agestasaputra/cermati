import React from "react";

const Context = React.createContext();

const initialState = {
  dataLandingPage: {
    name: "agsfer"
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "data-landing":
      return {
        ...state,
        dataLanding: action.data
      };
    default:
      console.log("error case reducer on root context");
      throw new Error();
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
