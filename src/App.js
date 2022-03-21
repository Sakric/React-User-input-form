import "./App.css";
import Form from "./components/Form";
import User from "./components/User";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [users, newUser] = useState([{ name: "Sakric", age: "22" }]);
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const setErrorTrue = (message) => {
    setErrorMessage(message);
    setErrorStatus(true);
  };

  const setErrorFalse = () => {
    setErrorStatus(false);
  };

  const renderUsers = (name, age) => {
    newUser((prevUsers) => {
      const updatedGoals = [...prevUsers];
      updatedGoals.unshift({ name: name, age: age });
      return updatedGoals;
    });
  };

  const render = users.map((user, i) => {
    return <User name={user.name} age={user.age} key={i} />;
  });

  return (
    <div>
      <Modal
        status={errorStatus}
        closeModal={setErrorFalse}
        message={errorMessage}
      />
      <section id="form">
        <Form applyUser={renderUsers} openModal={setErrorTrue} />
      </section>
      <section id="users">{render}</section>
    </div>
  );
}

export default App;
