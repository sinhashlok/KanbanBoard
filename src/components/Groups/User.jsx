import Section from "../Sections";

const User = (props) => {
  const { list, usersList, flow } = props;

  const newData = usersList.map((user) => {
    const userTasks = list
      .filter((item) => item.userId === user.id)
      .map((item) => ({
        taskId: item.id,
        title: item.title,
        status: item.status,
        priority: item.priority,
        tag: item.tag,
        userId: item.userId,
        userName: user.name,
      }));

    return userTasks;
  });

  return (
    <div className="section-card">
      {newData.map((item) => {
        return (
          <Section
            key={item.userId}
            status={item.status}
            list={[item]}
            usersList={usersList}
            flow={flow}
          />
        );
      })}
    </div>
  );
};

export default User;
