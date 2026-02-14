import { createContext, useContext, useState, useEffect } from "react";

export const useKey = () => useContext(KeyContext);

export const KeyContext = createContext<{
  keyValue: string;
  handleKeyDown: (e: KeyboardEvent) => void;
}>({
  keyValue: "",
  handleKeyDown: () => {}
});

const KeyProvider = ({ children }: { children: React.ReactNode }) => {
  const [keyValue, setKeyValue] = useState("");
  
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        setKeyValue("Up");
        break;
      case "ArrowDown":
        setKeyValue("Down");
        break;
      case "ArrowLeft":
        setKeyValue("Left");
        break;
      case "ArrowRight":
        setKeyValue("Right");
        break;
      default:
        setKeyValue("");
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <KeyContext.Provider value={{ keyValue, handleKeyDown }}>
      {children}
    </KeyContext.Provider>
  );
};
export default KeyProvider;