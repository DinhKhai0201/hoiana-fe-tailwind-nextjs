/* eslint-disable */

import { HiX } from 'react-icons/hi';
import Links from './components/Links';

import Image from 'next/image';
import { IRoute } from 'types/navigation';

function SidebarHorizon(props: { routes: IRoute[]; [x: string]: any }) {
  const { routes, open, setOpen } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-main-50 px-5 pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-96 xl:translate-x-0'
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={() => setOpen(false)}
      >
        <HiX />
      </span>

      <div className={`py-[50px] flex justify-center items-center`}>
        <Image
          alt="logo"
          width={150}
          height={100}
          src="https://hoiana.com/wp-content/uploads/2024/03/Link-%E2%86%92-HOIANA-LOGO.png.png"
        />
      </div>
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
      {/* Nav item end */}
    </div>
  );
}

export default SidebarHorizon;
