import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

export type ProvidersProps = {
  // normal react components
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <Router>{children}</Router>
);

export default Providers;
