import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error/Error";
import Contact from "./components/pages/Contact/Contact";
import Movies from "./components/pages/Movies/Movies";
import ItemDetails from "./components/ItemDetails/ItemDetails.jsx";
import TvShows from "./components/pages/TvShows/TvShows";
import SignIn from "./components/pages/SignIn/SignIn";
import JoinUs from "./components/pages/JoinUs/JoinUs";
import ThemeTemplate from "./components/theme/ThemeTemplate";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Footer from "./components/Footer/Footer.jsx";

const RouteLinks = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="movies" element={<ProtectedRoute Component={Movies} />} />
                <Route path="tvshows" element={<ProtectedRoute Component={TvShows} />} />
                <Route path="/movies/movie/:id" element={<ProtectedRoute Component={ItemDetails} />} />
                <Route path="/tvshows/tv/:id" element={<ProtectedRoute Component={ItemDetails} />} />

                <Route path="signin" element={<SignIn />} />
                <Route path="joinus" element={<JoinUs />} />
                <Route path="themetemplate" element={<ThemeTemplate />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
};

export default RouteLinks;
