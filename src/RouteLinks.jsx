import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error/Error";
import Contact from "./components/pages/Contact/Contact";
import Movies from "./components/pages/Movies/Movies";
import TvShows from "./components/pages/TvShows/TvShows";
import ThemeTemplate from "./components/ui/ThemeTemplate";

const RouteLinks = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="themetemplate" element={<ThemeTemplate />} />
                <Route path="contact" element={<Contact />} />
                <Route path="movies" element={<Movies />} />
                <Route path="tvshows" element={<TvShows />} />
                <Route path="movies/:moviesId" element={<Movies />} />
                <Route path="tvshows/:tvshowsId" element={<TvShows />} />
            </Routes>
        </>
    );
};

export default RouteLinks;
