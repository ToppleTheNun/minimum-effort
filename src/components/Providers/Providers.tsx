import React from "react";
import { node } from "prop-types";

import { BrowserRouter as Router } from "react-router-dom";

export type ProvidersProps = {
  // normal react components
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <Router>{children}</Router>
);

Providers.propTypes = {
  children: node.isRequired,
};

export default Providers;
