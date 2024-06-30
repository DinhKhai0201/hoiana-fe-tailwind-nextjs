/* eslint-disable */
import React from 'react';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from 'components/link/NavLink';
import DashIcon from 'components/icons/DashIcon';
// chakra imports

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
  // Chakra color mode
  const pathname = usePathname();

  const { routes } = props;
  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName: string) => {
      if (routeName !=='/') {
        return pathname?.includes(routeName);
      }
    },
    [pathname],
  );

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => {
      if (
        route.layout === '/admin' ||
        route.layout === '/auth'
      ) {
        if (route.path =='devider') {
          return <div className='h-[0.5px] my-4 bg-white'></div>
        }
        return (
          <NavLink key={index} href={route.layout + '/' + route.path}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="flex cursor-pointer items-center my-2"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? 'font-bold text-brand-500 dark:text-white'
                      : ' text-white'
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{' '}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? 'text-[18px] font-bold text-white dark:text-white'
                      : ' text-white'
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {/* {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-white dark:bg-white" />
              ) : null} */}
            </div>
          </NavLink>
        );
      }
    });
  };
  // BRAND
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
