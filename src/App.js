import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>

                <Header />

                <Navbar />

                <div className='wrapper-content'>
                    <Routes>
                        <Route path='/messages/*' element={<DialogsContainer />} />
                        <Route path='/profile/:userId' element={<ProfileContainer />} />
                        <Route path='/profile/' element={<ProfileContainer />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/find-users' element={<UsersContainer />} />
                    </Routes>
                </div>

                <Footer />

            </div>
        </BrowserRouter>

    );
}

export default App;
