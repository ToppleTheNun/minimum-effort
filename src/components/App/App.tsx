import React from "react";
import classNamesBind from "classnames/bind";

import logo from "../../logo.svg";
import styles from "./App.module.scss";

const cx = classNamesBind.bind(styles);

const App: React.FC = () => {
  return (
    <div className={cx("App")}>
      <header className={cx("App-header")}>
        <img src={logo} className={cx("App-logo")} alt="logo" />
        <p>
          Edit <code>src/components/App/App.tsx</code> and save to reload.
        </p>
        <a
          className={cx("App-link")}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
