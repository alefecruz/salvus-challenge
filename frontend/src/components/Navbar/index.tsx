import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import BTNexit from '../../assets/BTNexit.svg';
import BTNlogo from '../../assets/BTNlogo.svg';
import BTNuser from '../../assets/BTNuser.svg';
import BTNupload from '../../assets/BTNupload.svg';
import BTNdashboard from '../../assets/BTNdashboard.svg';
import { Bar } from './styles';

const NavBar = () => {
  const history = useHistory();
  const [avatar] = useState(localStorage.getItem('avatar'));
  // const id = localStorage.getItem('id');
  const name = localStorage.getItem('name');
  const field = localStorage.getItem('field');
  // const token = localStorage.getItem('token');

  function handleLogout(): void {
    localStorage.clear();
    history.push('/');
  }

  return (
    <>
      <Bar>
        <ul>
          <li>
            <div>
              <img className="shortLogo" src={BTNlogo} alt="logo" />
              <div className="profile">
                <img
                  src={
                    avatar === 'http://localhost:3333/files/null' ||
                    avatar === null
                      ? BTNuser
                      : avatar
                  }
                  alt="logo"
                />
                <h5>{name}</h5>
                <h6>{field}</h6>
              </div>
            </div>
          </li>
          <li>
            <Link to="/dashboard">
              <img src={BTNdashboard} alt="logo" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/uploads">
              <img src={BTNupload} alt="logo" />
              <span>Uploads</span>
            </Link>
          </li>
          <li>
            <button type="button" onClick={handleLogout}>
              <img src={BTNexit} alt="logo" />
              <span>Exit</span>
            </button>
          </li>
        </ul>
      </Bar>
    </>
  );
};

export default NavBar;
