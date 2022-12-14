import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FiLogOut, FiArchive } from "react-icons/fi";
import { SiGoogletranslate } from "react-icons/si";
import ToggleTheme from "./buttons/themeButton";
import { LocaleConsumer } from "../contexts/LocaleContext";

function AppNav({ logout, name }) {
  return (
    <LocaleConsumer>
      {
      ({ locale, toggleLocale }) => {
        return (
          <nav className="navigation">
            <ul>
            <li>
                <Link to="/archives" className="app-nav" title={locale === 'id' ? 'Arsip' : 'Archive'}>
                  <FiArchive />
                </Link>
              </li>
              <li>
                <button className="toggle-locale" onClick={toggleLocale}><SiGoogletranslate /></button>
              </li>
              <li>
                <ToggleTheme />
              </li>
              <li>
                <button className="button-logout" onClick={logout} title={locale === 'id' ? 'Keluar' : 'Logout'}><FiLogOut />{name}</button>
              </li>
            </ul>
          </nav>
        )
      }}
    </LocaleConsumer>
  );
}

AppNav.propTypes = {
    name: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired,
  };

export default AppNav;
