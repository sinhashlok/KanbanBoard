import PriorityHighSharpIcon from "@mui/icons-material/PriorityHighSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import SignalCellularAlt1BarSharpIcon from "@mui/icons-material/SignalCellularAlt1BarSharp";
import SignalCellularAlt2BarSharpIcon from "@mui/icons-material/SignalCellularAlt2BarSharp";
import SignalCellularAltSharpIcon from "@mui/icons-material/SignalCellularAltSharp";

import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import DonutSmallSharpIcon from "@mui/icons-material/DonutSmallSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const Cards = (props) => {
  const { item, flow, status, list } = props;
  let priority = item.priority;
  let icon = "";

  switch (status) {
    case "Todo":
      icon = <CircleOutlinedIcon fontSize="small" />;
      break;
    case "In progress":
      icon = <DonutSmallSharpIcon fontSize="small" />;
      break;
    case "Done":
      icon = <CheckCircleSharpIcon fontSize="small" />;
      break;
    case "Cancelled":
      icon = <CloseSharpIcon fontSize="small" />;
      break;
    default:
      icon = "";
      break;
  }

  switch (item.priority) {
    case 0:
      priority = <MoreHorizSharpIcon style={{ color: "gray" }} />;
      break;
    case 1:
      priority = <SignalCellularAlt1BarSharpIcon style={{ color: "gray" }} />;
      break;
    case 2:
      priority = <SignalCellularAlt2BarSharpIcon style={{ color: "gray" }} />;
      break;
    case 3:
      priority = <SignalCellularAltSharpIcon style={{ color: "gray" }} />;
      break;
    case 4:
      priority = <PriorityHighSharpIcon style={{ color: "gray" }} />;
      break;
    default:
      break;
  }

  return (
    <div className="cards">
      <div className="cards-head">
        <p style={{ color: "gray" }}>{item.id}</p>
        {flow != 2 && <p className="card-username">{list.userName}</p>}
      </div>
      <div className="cards-body">
        {flow == 2 && <div className="card-status">{icon}</div>}
        <div className="card-task">{item.title}</div>
      </div>
      <div className="card-info">
        <div className="card-priority">{priority}</div>
        <div className="card-tag">{item.tag}</div>
      </div>
    </div>
  );
};

export default Cards;
