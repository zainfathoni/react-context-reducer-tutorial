import { useReducer } from "react";
import CounterContext, { CounterState } from "./CounterContext";

function counterReducer(
  state: CounterState,
  action: { type: "increment" | "decrement" | string },
) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function CounterProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
  });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
