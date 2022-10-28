import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const UserList = ({ users }) => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    axios.get("./home").then((response) => {
      setBackendData(response.data.users);
    });
  }, []);

  return (
    <div>
      <ul>
        {backendData.map((item) => {
          return <li key={item._id}>{item.username}</li>;
        })}
      </ul>
      <hr />
    </div>
  );
};

export default UserList;
