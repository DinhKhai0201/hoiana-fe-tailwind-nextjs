// Admin Imports

// Icon Imports
import {
  MdBarChart,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdPerson,
} from 'react-icons/md';
import { PiConfetti } from 'react-icons/pi';
import { CiCircleInfo } from "react-icons/ci";
import { IoIosFlower } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";

const routes = [
  {
    name: 'Our Culture',
    layout: '/admin',
    path: 'our-culture',
    icon: <IoIosFlower className="h-6 w-6 text-white" />,
  },
  {
    name: 'Product Knowledge',
    layout: '/admin',
    path: 'product-knowledge',
    icon: <CiCircleInfo className="h-6 w-6 text-white" />,
  },
  {
    name: '',
    layout: '/admin',
    path: 'devider',
    icon: <PiConfetti className="h-6 w-6 text-white" />,

  },
  {
    name: 'Needs Feed',
    layout: '/admin',
    path: 'news-feeds',
    icon: <IoNewspaperOutline className="h-6 w-6 text-white" />,
  },
  {
    name: 'Announcements',
    layout: '/admin',
    path: 'announcements',
    icon: <PiConfetti className="h-6 w-6 text-white" />,
  },
  // {
  //   name: 'Main Dashboard',
  //   layout: '/admin',
  //   path: 'default',
  //   icon: <MdHome className="h-6 w-6 text-white" />,
  // },
  // {
  //   name: 'NFT Marketplace',
  //   layout: '/admin',
  //   path: 'nft-marketplace',
  //   icon: <MdOutlineShoppingCart className="h-6 w-6 text-white" />,
  //   secondary: true,
  // },
  // {
  //   name: 'Data Tables',
  //   layout: '/admin',
  //   icon: <MdBarChart className="h-6 w-6 text-white" />,
  //   path: 'data-tables',
  // },
];
export default routes;
