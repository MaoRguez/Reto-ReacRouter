import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { DiJsBadge, DiReact, DiHtml5, DiCss3 } from "react-icons/di";

import '../css/Stats.css';
import Example from '../Example';

const SIZE = '32px';

export const Stats = () => {
  return (
    <Fragment>
      <h2>Stats</h2>
      <div className="containerStats">
        <div className="containerStats__container">
          <div className="containerStats__element">
            <h3>$13580</h3>
            <p>Available balance</p>
            <div className="containerStats__spend">
              <FaArrowCircleUp color='red' className="containerStats__spend-icon" />
              <p>Spend</p>
              <h5>$3123</h5>
            </div>
            <div className="containerStats__spend">
              <FaArrowCircleDown color='green' className="containerStats__spend-icon"/>
              <p>Received</p>
              <h5>$4074</h5>
            </div>
          </div>
          <div className="containerStats-ghraphic">
            <Example className="graphic"/>
          </div>
        </div>
      </div>
      <div className="containerTransaction">
        <div className="containerTransactionTitle__element">
          <h2>Transactions</h2>
          <Link to='/transactions' >See All</Link>
        </div>
      </div>
      <div className="containerTransaction">
        <div className="containerTransaction__element">
          <DiJsBadge size={SIZE} color='#fff48f' className="containerTransaction__element-icon-js" />
          <p className="containerTransaction__element-title">JavaScript</p>
          <p className="containerTransaction__element-concept">Salary</p>
          <p className="containerTransaction__element-valor">+$7000</p>
          <p className="containerTransaction__element-date">12:45</p>
        </div>
      </div>
      <div className="containerTransaction">
        <div className="containerTransaction__element">
          <DiReact size={SIZE} color='#2d4ef5' className="containerTransaction__element-icon-js" />
          <p className="containerTransaction__element-title">ReactJS</p>
          <p className="containerTransaction__element-concept">Salary</p>
          <p className="containerTransaction__element-valor">+$7000</p>
          <p className="containerTransaction__element-date">12:45</p>
        </div>
      </div>
      <div className="containerTransaction">
        <div className="containerTransaction__element">
          <DiHtml5 size={SIZE} color='#ff5722' className="containerTransaction__element-icon-js" />
          <p className="containerTransaction__element-title">Html5</p>
          <p className="containerTransaction__element-concept">Salary</p>
          <p className="containerTransaction__element-valor">+$7000</p>
          <p className="containerTransaction__element-date">12:45</p>
        </div>
      </div>
      <div className="containerTransaction">
        <div className="containerTransaction__element">
          <DiCss3 size={SIZE} color='#00bcd4' className="containerTransaction__element-icon-js" />
          <p className="containerTransaction__element-title">Css3</p>
          <p className="containerTransaction__element-concept">Salary</p>
          <p className="containerTransaction__element-valor">+$7000</p>
          <p className="containerTransaction__element-date">12:45</p>
        </div>
      </div>
      <div className="containerTransaction">
        <div className="containerTransaction__element"></div>
      </div>
    </Fragment>
  );
}
