import React from "react";
import axios from "axios";
import { useState } from "react";

const CreateModal = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async () => {
    await axios.post(`${window.location}/register`, user);
  };
  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setUser({ ...user, [id]: value });
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
