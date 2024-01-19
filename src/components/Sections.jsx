import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import DonutSmallSharpIcon from "@mui/icons-material/DonutSmallSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

import AddSharpIcon from "@mui/icons-material/AddSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import Cards from "./Cards";

const Section = (props) => {
  let { status, list, usersList } = props;
  let icon = props.icon;
  switch (status) {
    case "Todo":
      icon = <CircleOutlinedIcon fontSize="small" />;
      break;
    case "In Progress":
      icon = <DonutSmallSharpIcon fontSize="small" />;
      break;
    case "Done":
      icon = <CheckCircleSharpIcon fontSize="small" />;
      break;
    case "Cancelled":
      icon = <CloseSharpIcon fontSize="small" />;
      break;
    default:
      icon = ""
      break;
  }
  
  usersList.forEach((item) => {
    if (item.id === list[0].userId) {
      status = item.name;
    }
  });
  

  return (
    <div className="section">
      <div className="section-head">
        <div className="section-head-left">
          <ul>
            <li style={icon == "" ? {display: "none"} : {display: "block"}}>{icon}</li>
            <li>{status}</li>
            <li style={{ color: "gray" }}>{list.length}</li>
          </ul>
        </div>
        <div className="section-head-right">
          <ul>
            <li>
              <AddSharpIcon fontSize="small" />
            </li>
            <li>
              <MoreHorizSharpIcon fontSize="small" />
            </li>
          </ul>
        </div>
      </div>

      <div className="section-body">
        {list.map((item) => {
          return <Cards key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Section;
