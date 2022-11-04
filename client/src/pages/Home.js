import React from "react";
import UserList from "../components/userList";
import UserForm from "../components/userForm";

const Home = () => {
  return (
    <div className='home-container height-100 center-flex'>
      <UserList></UserList>
      <UserForm></UserForm>
    </div>
  );
};

export default Home;
