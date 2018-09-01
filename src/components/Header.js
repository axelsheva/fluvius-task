import React from 'react';
import { Link } from 'react-router-dom';

import AuthButton from '../containers/AuthButton';

const Header = () => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm header">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <Link to="/">Calendar</Link>
    </h5>
    <AuthButton />
  </div>
);

export default Header;
