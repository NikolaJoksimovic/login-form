import { useState, useEffect } from "react";
import UserList from "./components/userList";
import UserForm from "./components/userForm";

function App() {
  const [users, setUsers] = useState([{}]);

  useEffect(() => {}, []);

  return (
    <div className='app'>
      <UserList users={users}></UserList>
      <UserForm></UserForm>
    </div>
  );
}

export default App;
