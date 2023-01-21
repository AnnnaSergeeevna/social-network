import React from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Header from '../src/Components/Header/Header';
import Navbar from '../src/Components/Navbar/Navbar.jsx';
import Profile from '../src/Components/Profile/Profile.jsx';
import Footer from '../src/Components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <div className="App-wrapper">
        <Header />
        <Navbar />
        <Profile />
        <Footer />
      </div>
      </div>
      );
}

      export default App;
