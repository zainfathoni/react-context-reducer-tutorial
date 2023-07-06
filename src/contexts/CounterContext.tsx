import React from "react";

type ActionType = "increment" | "decrement" | string;

export type CounterState = {
  count: number;
};
export type CounterDispatch = React.Dispatch<{
  type: ActionType;
}>;
export type CounterContextType = {
  state?: CounterState;
  dispatch?: CounterDispatch;
};

const CounterContext = React.createContext({} as CounterContextType);

export default CounterContext;
