import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <img src="/Images/farmer.png" alt="yourpic" className="titleImage" />
      <div className="home">
        <div className="col1">
          Bulletin
          <ul>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
        <div className="col2">
          <ul>
            <div className="list1">

              <li>
                <Link style={{ textDecoration: 'none' }} to="/cropsInformation" className="cropInformation">information of crops</Link>
              </li>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, sint?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, cupiditate!
              </div>
            </div>
            <div className="list2">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente distinctio ab sunt accusantium provident, reiciendis sequi deserunt quis omnis. Incidunt, dolorum veniam? Doloremque autem rerum atque rem sapiente aliquid eos?</div>

              <li>
                <Link style={{ textDecoration: 'none' }} to="/schedulePlanner" className="schedulePlanner">Schedule Planner</Link>
              </li>
            </div>
            <div className="list3">
              <li>
                <Link style={{ textDecoration: 'none' }} to="/marketPlace" className="marketPlace">Market place</Link>
              </li>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam, delectus aliquam in ad consequuntur debitis rerum temporibus nobis tempore.</div>
            </div>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Home;
