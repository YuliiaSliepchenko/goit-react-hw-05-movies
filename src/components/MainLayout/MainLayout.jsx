import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from 'react';
import clsx from 'clsx';
import s from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <>
          <header className={s.header}>
              <nav>
                  <NavLink to='/' className={({ isActive }) => {
                      return clsx(isActive ? s.active : s.link);
                  }}>
                      <span>Home</span>
                  </NavLink>
                   <NavLink to='/movies' className={({ isActive }) => {
                      return clsx(isActive ? s.active : s.link);
                  }} >
                      <span>Movies</span>
                  </NavLink>
              </nav>
              </header>
              <main>
                  <Suspense fallback={<div>Loading...</div>}>
                      <Outlet/>
                  </Suspense>  
              </main>
    </>
  );
};

export default MainLayout;