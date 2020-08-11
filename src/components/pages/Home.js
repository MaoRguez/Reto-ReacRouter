import React, { Fragment } from  'react';
import { Link } from 'react-router-dom';

import '../css/Home.css';

import { MdAccountBalance, MdAddCircleOutline, MdPerson, MdFingerprint } from 'react-icons/md'
import PaymentForm from '../PaymentForm';

/* const SIZE = '32px'; */
const IMAGE = 'https://randomuser.me/api/portraits/women/76.jpg';

export const Home = () => {
  return <Fragment>
    {/* <header className="header">
      <Link to="/"><MdAccountBalance size={SIZE} /></Link>
      <h1>Bank</h1>
    </header> */}
    <section className="container">
      <div className="container__profile">
        <Link to="/">Edit</Link>
        <img className="container__profile-image" src={IMAGE} alt="Profile" />
        <h3>Maria Denis</h3>
        <p>Frontend Developer</p>
      </div>
    </section>
    <section className="container">
      <div className="container__cards">
        <div className="card-title_card">
          <h3>Cards</h3>
          <Link to="/"><MdAddCircleOutline /></Link>
        </div>
        <PaymentForm />
      </div>
    </section>
    <section className="container">
      <div className="container__accounts"s>
        <div className="container__accounts-title">
          <h3>Bank Accounts</h3>
          <Link to="/"><MdAddCircleOutline /></Link>
        </div>
          <div className="container__accounts-bank">
            <i><MdAccountBalance /></i>
            <div>
              <span>Bank Name</span>
              <p>Citibank</p>
            </div>
          </div>
          <div className="container__accounts-name">
            <div className="accounts">
              <i><MdPerson /></i>
              <div>
                <span>Account Name</span>
                <p>Maria Dennis</p>
              </div>
            </div>
            <div className="number">
              <i><MdFingerprint /></i>
              <div>
                <p>Ac Number</p>
                <p>4582569585</p>
              </div>
            </div>
          </div>
      </div>
    </section>
    <div className="container">
      <div className="container"></div>
    </div>
  </Fragment>
};