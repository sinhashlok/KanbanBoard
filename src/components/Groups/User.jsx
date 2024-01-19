import Section from "../Sections";

const User = (props) => {
  const { list, usersList, flow } = props;
  return (
    <div className="users">
      {list.map((item) => {
        return (
          <Section
            key={item.id}
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
