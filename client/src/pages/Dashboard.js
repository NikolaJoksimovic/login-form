import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const getDashboardInfo = async () => {
    // ovde vise nisi na / nego na /dashboard ali window.location trebalo bi da resi to...//
    let url =
      window.location.href.substring(0, window.location.href.lastIndexOf("/")) +
      "/dashboard";
    // url = "http://localhost:5000/dashboard";
    try {
      const response = await axios.get(`${url}/dashboard`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      });
      if (response) {
        setUserInfo(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getDashboardInfo();
  }, []);
  return (
    <section className='dashboard center-flex'>
      <h1>
        {userInfo?.username + "'s"}
        <span> dashboard</span>
      </h1>
      <div className='text-quote center-flex'>
        <div id='canvas'>
          <h3>
            Teachers teach and do the world good.
            <span>Kings just rule and are often misunderstood.</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
