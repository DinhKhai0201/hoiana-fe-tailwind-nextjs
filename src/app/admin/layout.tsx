'use client';
// Layout components
import Footer from 'components/footer/Footer';
import NavLink from 'components/link/NavLink';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import routes from 'routes';
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from 'utils/navigation';

export default function Admin({ children }: { children: React.ReactNode }) {
  // states and functions
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  return (
    <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
      <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin" />
      {/* Navbar & Main Content */}
      <div className="h-full w-full font-dm dark:bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-2.5  flex-none transition-all dark:bg-navy-900 
              xl:ml-[247px]`}
        >
          {/* Routes */}
          <div>
            <Navbar
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            />
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
              <div className="ml-[6px]">
                <div className="h-6 w-[224px] pt-1">
                  <a
                    className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                    href=" "
                  >
                    Pages
                    <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
                      {' '}
                      /{' '}
                    </span>
                  </a>
                  <NavLink
                    className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                    href="#"
                  >
                    {getActiveRoute(routes, pathname)}
                  </NavLink>
                </div>
                <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
                  <NavLink
                    href="#"
                    className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
                  >
                    {getActiveRoute(routes, pathname)}
                  </NavLink>
                </p>
              </div>

              {children}
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
