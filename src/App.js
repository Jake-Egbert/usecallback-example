import { useState, useCallback } from "react";

import useToggle from "./useToggle";
import List from "./List";

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useToggle(false);

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  // const getItems = useCallback(() => {
  //   return [number, number + 1, number + 2];
  // }, [number]);

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div className="App" style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}
