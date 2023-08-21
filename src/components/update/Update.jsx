import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import "./update.scss";
import { Button, Card } from "@mui/material";

const Update = () => {
  // const card = document.getElementById("card");
  // card.addEventListener("click", flipCard);
  // function flipCard() {
  //   card.classList.toggle("flipCard");
  // }

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">AgensSQL</h3>
      </div>
      <div className="subTitle">
        An integration of Bitnine's DB technology and PG expertise
      </div>
      <div className="paragraph">
        AgensSQL is an all-new relational DBMS based on PostgreSQL, with years
        of expertise and knowledge accumulated through database research and
        development. <br /> The enterprise package, along with AgensSQL engine,
        is an all-in-one solution that ensures the efficiency and scalability of
        data management.
        <br /> Get AgensSQL now for stable operation and management services at
        a reduced maintenance cost.
      </div>
      <div className="button">
        <Button>CONTACT</Button>
        <Button>BROCHURE</Button>
        <Button>BLOG</Button>
      </div>
      <div className="diagram">
        <img className="profileImg" src={"/assets/img_diagram.png"} alt="" />
      </div>
      <div className="key">Key features</div>
      <div className="p">
        Manage your data with Agens Enterprise Package Essential enterprise
        features such as high availability and sharding are provided
      </div>
      <div className="keyFeatures">
        <img src={"/assets/img_key-features.png"} alt="" />
      </div>
      <div className="engine">AgensSQL DB Engine</div>
      <div>Enhanced Data Security</div>
      <div>
        AgensSQL is a PostgreSQL-based DBMS that guarantees optimal security and
        stability.
      </div>
      <div className="card">
        <div className="c">My front </div>
        <div className="c">My back</div>
        <div className="c">My three</div>
      </div>
      <div>Agens Enterprise Package</div>
      <div>
        Agens Enterprise Package comes with a high availability management
        server that
        <br /> supports backup and data monitoring dashboard that helps
        enterprise customers manage their data efficiently.
      </div>
      <div className="row">
        <div className="column">
          <div>Agens HA Manager</div>
          <div>HA Clustering – Failover/Failback, Load-balancing</div>
          <div className="ahm">
            <img src={"/assets/img_AHM.png"} alt="" />
          </div>
        </div>
        <div className="column">
          Agens Enterprise Manager
          <div className="c"></div>
          <div className="c"></div>
          <div className="c"></div>
          <div className="c"></div>
          <div className="c"></div>
          <div className="c"></div>
        </div>
      </div>
    </div>
  );
};

export default Update;
