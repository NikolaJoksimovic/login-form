import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { TbArrowBigRight } from "react-icons/tb";

const UserList = () => {
  const [backendData, setBackendData] = useState([]);

  const getUsers = async () => {
    let url = window.location.href.substring(
      0,
      window.location.href.lastIndexOf("/")
    );
    url = "http://localhost:5000";
    try {
      const response = await axios.get(`${url}/users`);
      setBackendData(response.data.users);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const listOverlayEl = document.querySelector(".user-list-overlay");
  const userListEl = document.querySelector(".user-list");
  const expandBtnEl = document.querySelector(".expand-btn");
  const handleClick = () => {
    listOverlayEl.classList.toggle("user-list-overlay-show");
    userListEl.classList.toggle("user-list-show");
    expandBtnEl.classList.toggle("expand-btn-rotate");
  };

  return (
    <>
      <button className='expand-btn center-flex' onClick={handleClick}>
        <TbArrowBigRight></TbArrowBigRight>
      </button>
      <div className='user-list-container'>
        <div className='user-list-overlay'></div>
        <div className='user-list'>
          <h3>user list</h3>
          <ul>
            {backendData.map((item) => {
              return <li key={item._id}>{item.username}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserList;
