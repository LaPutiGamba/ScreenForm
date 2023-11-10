import { createContext, useState } from "react";

export const PersonContext = createContext({
  persons: {},
  setPerson: (person) => {},
});

function PersonContextProvider({ children }) {
  const [personInfo, setPersonInfo] = useState({
    name: "",
    surname: "",
    age: "",
    termsAndConditions: false,
  });

  function setPerson(person) {
    setPersonInfo((oldPerson) => (oldPerson = person));
  }

  const value = {
    persons: personInfo,
    setPerson: setPerson,
  };

  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
}

export default PersonContextProvider;
