import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Eat from './components/whattoeat/Eat'; 
import Profile from './components/profile/Profile';
import Favourite from './components/profile/Favourites';
import RecipeBook from './components/profile/RecipeBook';
import Reviews from './components/profile/Reviews';
import Wallet from './components/profile/Wallet';
import Friends from './components/profile/Friends';
import Notifications from './components/profile/Notifications';

import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                {/* <Header /> */}
                <Routes>
                    <Route path="/" element={<Header/>} />  
                    <Route path="/what-to-eat" element={<Eat />} />
                    <Route path="/profile" element={<Profile/>}>
                        <Route path="favourite" element={<Favourite />} />
                        <Route path="recipe-book" element={<RecipeBook />} />
                        <Route path="reviews" element={<Reviews/>} />
                        <Route path="wallet" element={<Wallet />} />
                        <Route path="friends" element={<Friends />} />
                        <Route path="notifications" element={<Notifications/>} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
