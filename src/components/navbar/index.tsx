import Dropdown from 'components/dropdown';
import React from 'react';
import { BsArrowBarUp } from 'react-icons/bs';
import { FiAlignJustify, FiSearch } from 'react-icons/fi';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
// import { RiMoonFill, RiSunFill } from 'react-icons/ri';
// import Configurator from './Configurator';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdNotificationsOutline } from 'react-icons/io';
import avatar from '/public/img/avatars/avatar4.png';
import { TbCompass } from "react-icons/tb";

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
  [x: string]: any;
}) => {
  const { onOpenSidenav, brandText, mini, hovered } = props;
  const [darkmode, setDarkmode] = React.useState(
    document.body.classList.contains('dark'),
  );
  return (
    <nav className="sticky top-0 z-40  bg-main-100 p-2  dark:bg-[#0b14374d]">
      <div className="relative mt-[3px] flex h-[61px] flex-grow items-center justify-between gap-2  px-2 py-2  dark:shadow-none  md:flex-grow-0 md:gap-1 xl:gap-2">
        <div className={`flex items-center whitespace-nowrap`}>
          {/* <Image
            alt="logo"
            width={150}
            height={100}
            src="https://hoiana.com/wp-content/uploads/2024/03/Link-%E2%86%92-HOIANA-LOGO.png.png"
          /> */}
          <TbCompass  className=' h-[60px] w-[60px] text-white'/>
          <p className='text-white text-[25px] hidden lg:block'>WELL COME TO HOIANA COMPASS</p>
        </div>
        <div className="flex h-full w-full items-center justify-end lg:mr-20">
          <div className="flex h-full items-center rounded-[8px] border border-white bg-main-100 text-navy-700 dark:bg-navy-900 dark:text-white xl:mr-10 xl:w-[400px]">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-8 w-8 text-white dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="SEARCH"
              className="block h-full w-full  bg-main-100 text-sm font-medium text-white outline-none placeholder:!text-white dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden text-white xl:block">
            <Link href="/admin">HOME</Link>
          </div>
          <div className="hidden text-white xl:block">LANGUAGES</div>
          <span
            className="flex cursor-pointer text-xl text-white dark:text-white xl:hidden"
            onClick={onOpenSidenav}
          >
            <FiAlignJustify className="h-8 w-8" />
          </span>
          {/* start Notification */}
          <Dropdown
            button={
              <p className="cursor-pointer">
                <IoMdNotificationsOutline className="h-8 w-8 text-white dark:text-white" />
              </p>
            }
            animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
            classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
          >
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  Notification
                </p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  Mark all read
                </p>
              </div>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    New Update: Hoiana
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    A new update for you
                  </p>
                </div>
              </button>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    New Update: Hoiana
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    A new update for you
                  </p>
                </div>
              </button>
            </div>
          </Dropdown>

          <div
            className="cursor-pointer text-gray-600"
            onClick={() => {
              if (darkmode) {
                document.body.classList.remove('dark');
                setDarkmode(false);
              } else {
                document.body.classList.add('dark');
                setDarkmode(true);
              }
            }}
          >
            {darkmode ? (
              <RiSunFill className="h-8 w-8 text-white dark:text-white" />
            ) : (
              <RiMoonFill className="h-8 w-8 text-white dark:text-white" />
            )}
          </div>
          {/* Profile & Dropdown */}
          <div className='w-[48px]'> <Dropdown
            button={
              <Image
                 width="2"
                height="20"
                className="h-10 w-10 rounded-full"
                src={avatar}
                alt="Elon Musk"
              />
            }
            animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"

            classNames={'py-2 top-8 -left-[180px] w-max w-4 h-4'}
          >
            <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="ml-4 mt-3">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    👋 Hey, Adela
                  </p>{' '}
                </div>
              </div>
              <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="ml-4 mt-3 flex flex-col">
                <a
                  href="/admin/profile"
                  className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Profile Settings
                </a>
                <a
                  href=" "
                  className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Newsletter Settings
                </a>
                <a
                  href="/auth/sign-in"
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  Log Out
                </a>
              </div>
            </div>
          </Dropdown></div>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
