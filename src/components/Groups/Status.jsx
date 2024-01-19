import Section from "../Sections";

const Status = (props) => {
  const { list, usersList, flow } = props;
  let backlog = [];
  let todo = [];
  let inProgress = [];
  let done = [];
  let cancelled = [];

  list.forEach((item) => {
    if (item.status === "Backlog") {
      backlog.push(item);
    } else if (item.status === "Todo") {
      todo.push(item);
    } else if (item.status === "In progress") {
      inProgress.push(item);
    } else if (item.status === "Done") {
      done.push(item);
    } else if (item.status === "Cancelled") {
      cancelled.push(item);
    }
  });
  

  return (
    <div className="status">
      <Section status="Backlog" list={backlog} usersList={usersList} flow={flow}/>
      <Section status="Todo" list={todo} usersList={usersList} flow={flow}/>
      <Section status="In Progress" list={inProgress} usersList={usersList} flow={flow}/>
      <Section status="Done" list={done} usersList={usersList} flow={flow}/>
      <Section status="Cancelled" list={cancelled} usersList={usersList} flow={flow}/>
    </div>
  );
};

export default Status;
