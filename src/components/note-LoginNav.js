import React from "react";
import { SiGoogletranslate } from "react-icons/si";
import ToggleTheme from "./buttons/themeButton";
import { LocaleConsumer } from "../contexts/LocaleContext";

function LoginNav({}) {
  return (
    <LocaleConsumer>
      {
      ({ toggleLocale }) => {
        return (
          <nav className="navigation">
            <ul>
              <li>
                <button className="toggle-locale" onClick={toggleLocale}><SiGoogletranslate /></button>
              </li>
              <li>
                <ToggleTheme />
              </li>
            </ul>
          </nav>
        )
      }}
    </LocaleConsumer>
  );
}

export default LoginNav;
