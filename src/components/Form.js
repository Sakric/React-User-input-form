import "./Form.css";
import { useState } from "react";

const Form = (props) => {
  const [age, setAge] = useState(1);
  const [user, setUser] = useState("");

  const formSubmited = (e) => {
    e.preventDefault();
    if (user.trim().length === 0) {
      props.openModal("You forgot to set name!");
    } else if (age < 1) {
      props.openModal("Age should be more than 0!");
    } else {
      props.applyUser(user, age);
      setUser("");
      setAge(1);
    }
  };

  const setUserHandler = (e) => {
    setUser(e.target.value);
  };

  const setAgeHandler = (e) => {
    setAge(+e.target.value);
  };

  return (
    <form onSubmit={formSubmited}>
      <div className="form">
        <label>Username</label>
        <input value={user} type="text" onChange={setUserHandler} />
        <label>Age (Years)</label>
        <input value={age} type="number" onChange={setAgeHandler} />
      </div>
      <button className="button">Add User</button>
    </form>
  );
};

export default Form;
