import axios from "axios";
import React from "react";
import CreateModal from "./createModal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const UserForm = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  let url = window.location.href.substring(
    0,
    window.location.href.lastIndexOf("/")
  );
  // url = "http://localhost:5000";

  // create acc request
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/login`, {
        username: user.username,
        password: user.password,
      });
      const token = response.data.token;
      setCookie("token", token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  // input changes
  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setUser({ ...user, [key]: value });
  };
  // modal
  const handleCreateAccount = () => {
    setShowCreateModal(!showCreateModal);
  };
  return (
    <div className='user-form center-flex'>
      <form className='center-flex' action=''>
        <label htmlFor='username'>username</label>
        <input
          id='username'
          type='text'
          onChange={handleChange}
          value={user.username}
        />
        <label htmlFor='password'>pasword</label>
        <input
          id='password'
          type='password'
          onChange={handleChange}
          value={user.password}
        />
        <button type='submit' onClick={handleClick}>
          login
        </button>
        <h3>error message!</h3>
      </form>
      <div className='create-acc-q center-flex'>
        <h2>dont have an account?</h2>
        <button onClick={handleCreateAccount}>create account</button>
        {showCreateModal && (
          <CreateModal setShowCreateModal={setShowCreateModal}></CreateModal>
        )}
      </div>
    </div>
  );
};

export default UserForm;
