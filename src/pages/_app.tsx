import "../styles/index.scss";

import type { AppProps } from "next/app";
import React from "react";

const MinimumEffortApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MinimumEffortApp;
