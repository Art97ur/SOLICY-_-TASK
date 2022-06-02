import { useState } from "react";
import { CardContext } from "..";
export const CardContextProvider = ({ children }) => {
  const [card, setCard] = useState([]);

  return (
    <CardContext.Provider value={{ card, setCard }}>
      {children}
    </CardContext.Provider>
  );
};