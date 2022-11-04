import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const CreateModal = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = window.location.href.substring(
      0,
      window.location.href.lastIndexOf("/")
    );
    url = "http://localhost:5000";

    try {
      const response = await axios.post(`${url}/register`, user);
      const token = response.data.token;
      setCookie("token", token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setUser({ ...user, [key]: value });
  };

  return (
    <div>
      <form action=''>
        <label htmlFor='username'>username</label>
        <input
          id='username'
          type='text'
          onChange={handleChange}
          value={user.username}
          required={true}
        />

        <label htmlFor='email'>email</label>
        <input
          id='email'
          type='email'
          onChange={handleChange}
          value={user.email}
          required={true}
        />

        <label htmlFor='password'>pasword</label>
        <input
          id='password'
          type='password'
          onChange={handleChange}
          value={user.password}
          required={true}
        />

        <label htmlFor='confirmPassword'>confirmPassword</label>
        <input
          id='confirmPassword'
          type='password'
          onChange={handleChange}
          value={user.confirmPassword}
          required={true}
        />

        <button type='submit' onClick={handleSubmit}>
          create account
        </button>
      </form>
    </div>
  );
};

export default CreateModal;
