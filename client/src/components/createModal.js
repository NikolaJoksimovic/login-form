import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AiOutlineClose } from "react-icons/ai";

const CreateModal = ({ setShowCreateModal }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = window.location.href.substring(
      0,
      window.location.href.lastIndexOf("/")
    );
    // url = "http://localhost:5000";

    try {
      const response = await axios.post(`${url}/register`, user);
      const token = response.data.token;
      setCookie("token", token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
      setErrorMsg(error.response.data.msg);
    }
  };
  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setUser({ ...user, [key]: value });
  };
  const handleCloseBtn = () => {
    setShowCreateModal(false);
  };
  return (
    <div className='create-form center-flex'>
      <button className='cls-btn' onClick={handleCloseBtn}>
        <AiOutlineClose></AiOutlineClose>
      </button>
      <form action='' className=' center-flex'>
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
        {errorMsg && <h3 className='err-msg'>{errorMsg}</h3>}
        <button type='submit' onClick={handleSubmit}>
          register user
        </button>
      </form>
    </div>
  );
};

export default CreateModal;
