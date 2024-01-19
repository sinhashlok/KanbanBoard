import { useState } from "react";

const Nav = (props) => {
  const { options, onSelect } = props;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <nav className="nav-bar">
      <div className="dropdownMenu">
        <select className="dropdown" value={selectedOption} onChange={handleSelectChange}>
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Nav;
