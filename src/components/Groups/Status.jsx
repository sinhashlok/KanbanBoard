import Section from "../Sections";

const Status = (props) => {
  const { list, usersList } = props;
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
      <Section status="Backlog" list={backlog} usersList={[]}/>
      <Section status="Todo" list={todo} usersList={[]}/>
      <Section status="In Progress" list={inProgress} usersList={[]}/>
      <Section status="Done" list={done} usersList={[]}/>
      <Section status="Cancelled" list={cancelled} usersList={[]}/>
    </div>
  );
};

export default Status;
