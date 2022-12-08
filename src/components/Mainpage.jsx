// import React, { useEffect, useState } from "react";
import SearchedCity from "./SearchedCity.jsx";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer.jsx";
import News from "./News.jsx";

export default function Mainpage() {
  return (
    <>
      <NavigationBar />
      <SearchedCity />
      <News />
      <Footer />
    </>
  );
}
