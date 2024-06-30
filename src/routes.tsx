// Admin Imports

// Icon Imports
import { AiOutlineForm } from 'react-icons/ai';
import { CiCircleInfo, CiSettings } from 'react-icons/ci';
import { GrGallery } from 'react-icons/gr';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { IoIosFlower } from 'react-icons/io';
import { IoNewspaperOutline } from 'react-icons/io5';
import { LiaFileContractSolid } from 'react-icons/lia';
import { LuContact2 } from 'react-icons/lu';
import { PiConfetti } from 'react-icons/pi';
import { TfiAnnouncement } from 'react-icons/tfi';
import { VscFeedback } from 'react-icons/vsc';

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
    icon: <TfiAnnouncement className="h-6 w-6 text-white" />,
  },
  {
    name: 'Celebration',
    layout: '/admin',
    path: '/',
    icon: <PiConfetti className="h-6 w-6 text-white" />,
  },
  {
    name: 'Gallery',
    layout: '/admin',
    path: '/',
    icon: <GrGallery className="h-6 w-6 text-white" />,
  },
  {
    name: '',
    layout: '/admin',
    path: 'devider',
    icon: <PiConfetti className="h-6 w-6 text-white" />,
  },
  {
    name: 'Policies & Procedures',
    layout: '/admin',
    path: '/',
    icon: <LiaFileContractSolid className="h-6 w-6 text-white" />,
  },
  {
    name: 'Form & Templates',
    layout: '/admin',
    path: '/',
    icon: <AiOutlineForm className="h-6 w-6 text-white" />,
  },
  {
    name: 'Directory',
    layout: '/admin',
    path: '/',
    icon: <LuContact2 className="h-6 w-6 text-white" />,
  },
  {
    name: 'How-to-guideline',
    layout: '/admin',
    path: '/',
    icon: <CiSettings className="h-6 w-6 text-white" />,
  },
  {
    name: '',
    layout: '/admin',
    path: 'devider',
    icon: <PiConfetti className="h-6 w-6 text-white" />,
  },
  {
    name: 'FAQs',
    layout: '/admin',
    path: '/',
    icon: <HiOutlineQuestionMarkCircle className="h-6 w-6 text-white" />,
  },
  {
    name: 'Feedback',
    layout: '/admin',
    path: '/',
    icon: <VscFeedback className="h-6 w-6 text-white" />,
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
