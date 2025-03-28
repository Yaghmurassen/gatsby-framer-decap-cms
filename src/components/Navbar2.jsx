import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';

import logoJustice from '../img/logo-justice.png';
import '../style/navbar.scss';

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState('');
  const lastScrollY = useRef(0);
  const throttleWait = useRef(false);

  useEffect(() => {
    const threshold = 10;

    const throttle = (callback, time) => {
      if (throttleWait.current) return;
      throttleWait.current = true;
      setTimeout(() => {
        callback();
        throttleWait.current = false;
      }, time);
    };

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setAtTop(scrollY < 50);

      if (Math.abs(scrollY - lastScrollY.current) < threshold) return;
      setScrollDirection(scrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = scrollY;
    };

    const onScroll = () => {
      throttle(updateScrollState, 100);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav role="navigation" aria-label="main-navigation">
      <div
        className={`nav mainDiv ${
          scrollDirection === 'down'
            ? 'isScrollingDown pl-unset'
            : 'pl-8  items-start'
        }`}
      >
        <div>
          <Link
            to="/"
            className="navbar-item flex items-center gap-2 mb-8"
            title="Logo"
          >
            <img
              src={logoJustice}
              alt="logo Justice"
              className={`m-auto ${
                scrollDirection === 'down'
                  ? 'isScrollingDown max-w-12'
                  : 'max-w-32'
              }`}
            />
            {scrollDirection !== 'down' && (
              <span className="block text-4xl italic font-bold">LMB</span>
            )}
          </Link>
        </div>

        <ul
          className={`flex flex-col gap-4 max-md2:hidden ${
            scrollDirection === 'down' ? '' : 'ml-3'
          }`}
        >
          {/* TODO: changer le tableau avec que 2 liens : décisions & articles + gérer les ancres sur la home */}
          {['/', '/competences', '/decisions', '/articles', '/contact'].map(
            (path, index) => (
              <Link key={index} className="navbar-itemus" to={path}>
                {scrollDirection === 'down' ? (
                  <img
                    src={logoJustice}
                    alt="logo Justice"
                    className="m-auto max-w-8"
                  />
                ) : (
                  path.replace('/', '') || 'Présentation'
                )}
              </Link>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
