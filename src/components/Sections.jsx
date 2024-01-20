import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import DonutSmallSharpIcon from "@mui/icons-material/DonutSmallSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

import AddSharpIcon from "@mui/icons-material/AddSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import Cards from "./Cards";

const Section = (props) => {
  const { status, list, usersList, flow } = props;

  let userName = "";
  let icon = "";

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
      icon = "";
      break;
  }

  let newDataList = list.map((item) => {
    const user = usersList.find((user) => user.id === item.userId);

    if (user) {
      return {
        ...item,
        userName: user.name,
      };
    }
  });

  return (
    <div className="section">
      <div className="section-head">
        <div className="section-head-left">
          <ul>
            {flow == 1 && (
              <li
                style={icon == "" ? { display: "none" } : { display: "block" }}
              >
                {icon}
              </li>
            )}
            <li>{flow == 2 ? list[0][0].userName : status}</li>
            <li style={{ color: "gray" }}>{flow == 2 ? list[0].length : list.length}</li>
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
        {flow == 2
          ? list[0].map((item) => {
              return (
                <Cards
                  key={item.id}
                  item={item}
                  flow={flow}
                  status={item.status}
                  list={item}
                />
              );
            })
          : newDataList.map((item) => {
              return (
                <Cards
                  key={item.id}
                  item={item}
                  flow={flow}
                  status={status}
                  list={item}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Section;
