import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const Dropdown = (props) => {
  const { selected, setSelected, onChange } = props;
  const [isActive, setIsActive] = useState(false);
  const options = [
    { label: "Group by: Status", value: 1 },
    { label: "Group by: User", value: 2 },
    { label: "Group by: Priority", value: 3 },
  ];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <div>{options[selected - 1].label}</div>
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
