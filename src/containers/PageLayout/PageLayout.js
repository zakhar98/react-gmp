import React from "react";
import PropTypes from "prop-types";
import MoviesCatalog from "../../components/MoviesCatalog/MoviesCatalog.js";
import Footer from "../../components/Footer/Footer.js";

export default function PageLayout({children}) {
  return (
    <>
      {children}
      <MoviesCatalog />
      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
