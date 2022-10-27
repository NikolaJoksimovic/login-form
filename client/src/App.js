import UserList from "./components/userList";
import { useState, useEffect } from "react";
import UserForm from "./components/userForm";

function App() {
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    // fetch("/")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUsers({ data });
    //   });
  }, []);

  return (
    <div className='app'>
      <UserList users={users}></UserList>
      <UserForm></UserForm>
    </div>
  );
}

export default App;
