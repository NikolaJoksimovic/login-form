import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const getDashboardInfo = async () => {
    // ovde vise nisi na / nego na /dashboard ali window.location trebalo bi da resi to...//
    let url = window.location.href.substring(
      0,
      window.location.href.lastIndexOf("/")
    );
    try {
      const response = await axios.get(
        "http://localhost:5000/dashboard/dashboard",
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );
      if (response) {
        setUserInfo(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getDashboardInfo();
  }, []);

  return (
    <div>
      <h1>
        {userInfo?.username}
        <span>'s dashboard</span>
      </h1>
      <p>
        Teaches teach and do good for this world. Kings just rule and are often
        misunderstood.
      </p>
    </div>
  );
};

export default Dashboard;
