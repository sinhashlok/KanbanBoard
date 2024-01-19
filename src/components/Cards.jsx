import PriorityHighSharpIcon from "@mui/icons-material/PriorityHighSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import SignalCellularAlt1BarSharpIcon from "@mui/icons-material/SignalCellularAlt1BarSharp";
import SignalCellularAlt2BarSharpIcon from "@mui/icons-material/SignalCellularAlt2BarSharp";
import SignalCellularAltSharpIcon from "@mui/icons-material/SignalCellularAltSharp";

const Cards = (props) => {
  const { item } = props;
  let priority = item.priority;

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
        <p>{item.id}</p>
      </div>
      <div className="cards-body">
        <>{item.title}</>
      </div>
      <div className="card-info">
        <div className="card-priority">{priority}</div>
        <div className="card-tag">{item.tag}</div>
      </div>
    </div>
  );
};

export default Cards;
