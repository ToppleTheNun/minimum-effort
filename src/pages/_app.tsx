import React from "react";
import type { AppProps } from "next/app";

import "../styles/index.scss";

const MinimumEffortApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MinimumEffortApp;
