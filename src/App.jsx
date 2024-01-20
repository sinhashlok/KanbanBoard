import { useState } from "react";
import Body from "./components/Body";
import Nav from "./components/Nav";

const App = () => {
  const [flow, setFlow] = useState(1);

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
