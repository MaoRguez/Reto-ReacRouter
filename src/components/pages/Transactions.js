import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { DiJsBadge, DiReact, DiHtml5, DiCss3 } from "react-icons/di";

const SIZE = '32px';

export const Transactions = () => {
  return (
    <Fragment>
      <h1>Transactions</h1>;
      <div>
        <Link to='/'>All</Link>
        <Link to='/stats'>Received</Link>
        <Link to='/transactions'>Spend</Link>
      </div>
      <h2>Today</h2>
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
      <h2>Yesterday</h2>
      <div className="containerTransaction">
        <div className="containerTransaction__element">
          <DiHtml5 size={SIZE} color='#ff5722' className="containerTransaction__element-icon-js" />
          <p className="containerTransaction__element-title">Html5</p>
          <p className="containerTransaction__element-concept">Salary</p>
          <p className="containerTransaction__element-valor">+$7000</p>
          <p className="containerTransaction__element-date">12:45</p>
        </div>
      </div>
      <div className="containerTransaction exp">
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