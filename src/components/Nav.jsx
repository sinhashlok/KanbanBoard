import { useState } from "react";
import Dropdown from "./Dropdown";

const Nav = (props) => {
  const { onSelect } = props;
  const [selectedOption, setSelectedOption] = useState(1);

  const handleSelectChange = (selectValue) => {
    setSelectedOption(selectedOption);
    onSelect(selectValue);
  };

  return (
    <nav className="nav-bar">
      <Dropdown
        selected={selectedOption}
        setSelected={setSelectedOption}
        onChange={handleSelectChange}
      />
    </nav>
  );
};

export default Nav;
