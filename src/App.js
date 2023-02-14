import React from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Header from '../src/Components/Header/Header';
import Navbar from '../src/Components/Navbar/Navbar.jsx';
import Profile from '../src/Components/Profile/Profile.jsx';
import Footer from '../src/Components/Footer/Footer.jsx';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music';
import News from './Components/News';
import Settings from './Components/Settings';
import { Routes, Route } from 'react-router-dom';
import state from './Redux/Redux-store';
import DialogsContainer from './Components/Dialogs/Dialogs container';
import UsersContainer from './Components/Users/Users container';

const App = (props) => {
  return (
    <div className='App-wrapper'>
      <Header />
      <Navbar />
      <div className='App-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile store={props.store} />}></Route>
          <Route path='/dialogs' element={<DialogsContainer store={props.store}/>}></Route>
          <Route path='/users' element={<UsersContainer store={props.store}/>}></Route>
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
