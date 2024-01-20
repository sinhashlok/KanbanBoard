import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const Dropdown = (props) => {
  const { selected, setSelected, onChange } = props;
  const [selectedOption, setSelectedOption] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const options = [
    { label: "Status", value: 1 },
    { label: "User", value: 2 },
    { label: "Priority", value: 3 },
  ];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <div>{`Group by: ${options[selectedOption - 1].label}`}</div>
        <div>
          <ArrowDropDownIcon />
        </div>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => {
            return (
              <div
                key={option.label}
                className="dropdown-item"
                onClick={(e) => {
                  setSelected(option.value);
                  setSelectedOption(option.value);
                  setIsActive(false);
                  onChange(option.value);
                }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
