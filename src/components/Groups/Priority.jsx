import Section from "../Sections";

const Priority = (props) => {
  const { list, usersList, flow } = props;
  let noPriority = [];
  let urgent = [];
  let high = [];
  let medium = [];
  let low = [];

  list.forEach((item) => {
    if (item.priority === 0) {
      noPriority.push(item);
    } else if (item.priority === 1) {
      urgent.push(item);
    } else if (item.priority === 2) {
      high.push(item);
    } else if (item.priority === 3) {
      medium.push(item);
    } else if (item.priority === 4) {
      low.push(item);
    }
  });

  return (
    <div className="section-card">
      <Section
        status="No Priority"
        list={noPriority}
        usersList={usersList}
        flow={flow}
      />
      <Section
        status="Urgent"
        list={urgent}
        usersList={usersList}
        flow={flow}
      />
      <Section status="High" list={high} usersList={usersList} flow={flow} />
      <Section
        status="Medium"
        list={medium}
        usersList={usersList}
        flow={flow}
      />
      <Section status="Low" list={low} usersList={usersList} flow={flow} />
    </div>
  );
};

export default Priority;
