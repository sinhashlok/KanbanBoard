import { useEffect, useState } from "react";
import { USER_API } from "../utils/constants";
import Status from "./Groups/Status";
import User from "./Groups/User";

const Body = () => {
  const [dataList, setDataList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [flow, setFlow] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(USER_API);
      const json = await data.json();
      setUsersList(json.users);
      setDataList(json.tickets);
    }
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="sections">
        {flow == 1 ? (
          <Status list={dataList} usersList={[]} />
        ) : (
          <User list={dataList} usersList={usersList} />
        )}
      </div>
    </div>
  );
};

export default Body;
