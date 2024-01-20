import { useState, useEffect } from "react";
import Body from "./components/Body";
import Nav from "./components/Nav";

const App = () => {
  const [flow, setFlow] = useState(() => {
    return JSON.parse(localStorage.getItem("flow"));
  });
  useEffect(() => {
    localStorage.setItem("flow", flow);
  }, [flow]);

  const handleDropdownChange = (selectedValue) => {
    setFlow(selectedValue);
  };

  return (
    <div className="app">
      <Nav onSelect={handleDropdownChange} />
      <Body flow={flow} />
    </div>
  );
};

export default App;
