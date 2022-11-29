import React from 'react';
import {Link, Outlet} from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>This is our first project with navigation</p>
      <Link to="contacts">Contacts</Link>
      <Outlet/>
    </div>
  );
};

export default AboutUs;