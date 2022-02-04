import p from './App.css';
import React from 'react';
import Header from './Header/Header.jsx';
import Navbar from './Navbar/Nav.jsx';
import Profile from './Profile/Profile.jsx';
import Dialog from "./Dialog/Dialog";
import Music from "./Music/Music";
import News from "./News/News"
import Setting from "./Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className={p.appwrapper}>
                <Header />
                <Navbar />
                <Routes className={p.appwrappercontent}>
                    <Route path='/dialog' element={< Dialog />} />
                    <Route path='/profile' element={< Profile />} />
                    <Route path='/news' element={< News />} />
                    <Route path='/music' element={< Music />} />
                    <Route path='/settings' element={< Setting />} />

                    {/* <Route exact path='/dialog' render={() => <Dialog />} />
                    <Route exact path='/profile' render={() => <Profile />} />
                    <Route exact path='/news' render={ () => <News /> }/>
                    <Route exact path='/music' render={ () => <Music /> }/>
                    <Route exact path='/setting' render={ () => <Setting /> }/> */}

                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;