import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeImg from '../../Image/News.jpg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-12 row topHome">
            <li className="col-6"><img className="homeImg" src={HomeImg} alt="News" /></li>
            <li className="col-6 homeTitle">
              Latest general news
            </li>
          </div>
          <div className="col-12 row totalStatus">
            <h3 className="col-12 py-2">Total Status</h3>
          </div>
          <div className="col-12 containt">
            <ul className="col-12 row">
              <li className="col-6 titleNews">
                <NavLink to="/detailContain" className="nav-link">
                  <i className="fa fa-greater-than py-4" />
                </NavLink>
                <h3 className="px-2">
                  Next US election may
                  prove most dangerous time for Taiwan, warns veteran US diplomat Chas Freeman
                </h3>
              </li>
              <li className="col-6 titleNews">
                <i className="fa fa-greater-than py-4" />
                <h3 className="px-2">
                  EU seeks to release Ukrainian grain stuck due to Russia’s sea blockade
                </h3>
              </li>
              <li className="col-6 titleNews">
                <i className="fa fa-greater-than py-4" />
                <h3 className="px-2">
                  Next US election may
                  prove most dangerous time for Taiwan, warns veteran US diplomat Chas Freeman
                </h3>
              </li>
              <li className="col-6 titleNews">
                <i className="fa fa-greater-than py-4" />
                <h3 className="px-2">
                  EU seeks to release Ukrainian grain stuck due to Russia’s sea blockade
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
