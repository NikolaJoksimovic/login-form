import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const UserList = () => {
  const [backendData, setBackendData] = useState([]);
  const [resStatus, setResStatus] = useState(200);

  const getUsers = async () => {
    let url = window.location.href.substring(
      0,
      window.location.href.lastIndexOf("/")
    );
    url = "http://localhost:5000";
    try {
      const response = await axios.get(`${url}/users`);
      setBackendData(response.data.users);
      setResStatus(response.status);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return resStatus === 200 ? (
    <div>
      <ul>
        {backendData.map((item) => {
          return <li key={item._id}>{item.username}</li>;
        })}
      </ul>
      <hr />
    </div>
  ) : (
    <h2>Somethin went wrong while fetching users list</h2>
  );
};

export default UserList;
