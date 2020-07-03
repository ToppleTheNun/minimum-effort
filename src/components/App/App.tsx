import React from "react";

import Hero from "../Hero";
import Navbar from "../Navbar";
import Providers from "../Providers";

const App: React.FC = () => {
  return (
    <Providers>
      <Navbar />
      <Hero />
    </Providers>
  );
};

export default App;
