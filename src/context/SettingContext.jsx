import { json } from "monaco-editor";
import { createContext, useEffect, useState } from "react";
export const SettingContext = createContext();
const ContextProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    fontSize: 17,
    fontWeight: "400",
    fontFamily: "Fira Code",
    theme: "vs-dark",
    webTheme: true,
    lineHeight: 1.5,
    autoRunCode: true,
    intellisa: true,
    wordWrap: false,
    lineNumber: true
  });
  useEffect(() => {
  localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings])
  
  return <SettingContext.Provider value={{settings: JSON.parse(localStorage.getItem('settings')), setSettings}}>{children}</SettingContext.Provider>;
};

export default ContextProvider;
