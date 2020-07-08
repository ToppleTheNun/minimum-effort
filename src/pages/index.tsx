import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import "../index.scss";

const HomePage: React.FC = () => (
  <>
    <Helmet>
      <title>Minimum Effort</title>
    </Helmet>
    <Navbar />
    <Hero />
  </>
);

export default HomePage;
