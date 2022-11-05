import React from "react";
import UserList from "../components/userList";
import UserForm from "../components/userForm";

const Home = () => {
  return (
    <section className='home-container height-100 center-flex'>
      <UserList></UserList>
      <UserForm></UserForm>
    </section>
  );
};

export default Home;
