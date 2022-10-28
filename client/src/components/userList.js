import React from "react";
import axios from "axios";
import { useEffect } from "react";

const UserList = ({ users }) => {
  useEffect(() => {
    axios.get("./home").then((response) => {
      console.log(response.data);
    });
  }, []);
  return <div>show all users</div>;
};

export default UserList;
