import React from "react";
import Footer from "../../components/Footer/Footer.js";
import Logo from "../../components/Logo/Logo.js";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import { Link } from "react-router-dom";
import "./style.scss";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <Logo />
      <div className="not-found-page__content">
        <div className="not-found-page__text">Page Not Found</div>
        <div className="not-found-page__404">404</div>
        <Link to="/">
          <CustomButton outlined>GO BACK TO HOME</CustomButton>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
