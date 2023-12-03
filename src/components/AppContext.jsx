import { createContext, useContext, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("norway");

  return (
    <AppContext.Provider value={{ setSearchQuery, searchQuery }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside of the CitiesProvider!");
  return context;
}

export { useAppContext, AppContextProvider };
