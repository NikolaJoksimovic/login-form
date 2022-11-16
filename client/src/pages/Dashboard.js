import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import data from "../url.json";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState();
  const [cookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  const getDashboardInfo = async () => {
    const url = data.url;
    try {
      const response = await axios.get(`${url}/dashboard`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      });
      if (response) {
        setUserInfo(response.data);
        setLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getDashboardInfo();
  }, []);
  return loading ? (
    <h1>loading...</h1>
  ) : (
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
