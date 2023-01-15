import React from "react";
import "./styles.css";

const App = () => {
  const [users, setUsers] = React.useState([]);

  const loadUsers = async () => {
    console.log("before");
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUsers(jsonresponse);
  };
  return (
    <div className="App">
      <h1>Data Fetch</h1>
      <button onClick={loadUsers}> Get Data</button>

      <ul>
        {users.map(({ id, login, avatar_url }) => (
          <li>
            key = {id} Name: {login}
            Avator: {avatar_url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
