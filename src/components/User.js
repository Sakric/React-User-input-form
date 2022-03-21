import "./User.css";

const User = (props) => {
  return (
    <div className="user">
      <h2>
        {props.name} ({props.age} years old)
      </h2>
    </div>
  );
};

export default User;
