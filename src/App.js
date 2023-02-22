import React from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Navbar from '../src/Components/Navbar/Navbar.jsx';
import Footer from '../src/Components/Footer/Footer.jsx';
import Music from './Components/Music';
import News from './Components/News';
import Settings from './Components/Settings';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/Dialogs container';
import UsersContainer from './Components/Users/Users container';
import ProfileContainer from './Components/Profile/Profile Container';
import HeaderContainer from './Components/Header/Header container';

const App = (props) => {
  return (
    <div className='App-wrapper'>
      <HeaderContainer store={props.store} />
      <Navbar />
      <div className='App-wrapper-content'>
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer store={props.store}/>}></Route>
          <Route path='/dialogs' element={<DialogsContainer store={props.store} />}></Route>
          <Route path='/users' element={<UsersContainer store={props.store} />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/music' element={<Music />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
