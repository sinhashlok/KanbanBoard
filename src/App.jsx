import { useState } from "react";
import Body from "./components/Body";
import Nav from "./components/Nav";

const App = () => {
  const options = [
    { label: "Group by: Status", value: 1 },
    { label: "Group by: User", value: 2 },
    { label: "Group by: Priority", value: 3 },
  ];
  const [flow, setFlow] = useState(1);

  const handleDropdownChange = (selectedValue) => {
    setFlow(selectedValue);
  };

  return (
    <div className="app">
      <Nav options={options} onSelect={handleDropdownChange} />
      <Body flow={flow} />
    </div>
  );
};

export default App;
