import Section from "../Sections";

const User = (props) => {
  const { list, usersList } = props;
  return (
    <div className="users">
      {list.map((item) => {
        return (
          <Section
            key={item.id}
            status={item.userId}
            list={[item]}
            usersList={usersList}
          />
        );
      })}
    </div>
  );
};

export default User;
