import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Link, Route, Routes, Outlet, NavLink, useNavigate} from "react-router-dom";
import Plovo from "./containers/Plovo/Plovo";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import Home from "./containers/Home/Home";

function App() {
  return (
    <>
      <header><NavBar/></header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/about-us" element={<AboutUs/>}>
            <Route path="contacts" element={<Contacts/>}/>
          </Route>

          <Route path="/portfolio" element={(<><Outlet/><Link to="plovo">Plovo</Link></>)}>
            <Route path="plovo" element={(<Plovo/>)}>
            </Route>
          </Route>


          <Route path="*" element={<h1>Not found ;(</h1>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
