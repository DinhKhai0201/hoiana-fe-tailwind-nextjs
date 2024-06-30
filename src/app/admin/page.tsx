'use client';

import NewsFeedItem from 'components/admin/default/NewsFeedItem';
import Card from 'components/card';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const cards = [
  '/img/example/1.webp',
  '/img/example/2.webp',
  '/img/example/3.webp',
  '/img/example/4.webp',
  '/img/example/5.webp',
  '/img/example/6.webp',
  '/img/example/7.webp',
  '/img/example/8.webp',
];

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home({}) {
  const [slider, setSlider] = useState<Slider | null>(null);

  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div>
          <Card extra="pb-7 p-[20px] h-full justify-between ">
            <div className="relative flex flex-row">
              <div className="">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  XIN CHÀO
                </h4>
                <p className="lead">Make to day great</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-end gap-4">
                <img
                  src="/img/example/weather-icon.webp"
                  className="h-[50px] w-[80px]"
                />
                <div>
                  <p className="text-[22px]">Monday</p>
                  <p className="text-[22px]">17 June 2024</p>
                  <p className="text-[22px]">09:40 AM</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="banner-slider col-span-2">
          <Card extra="carousel relative">
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {cards.map((url, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[20px]"
                >
                  <div className="absolute bottom-16 left-10">
                    <h1 className="text-[33px] text-white">OUR VISION</h1>
                    <p className="lead text-white">
                      Creating lasting memories as the Asia's premier integrated
                      resort
                    </p>
                  </div>
                  <img src={url} />
                </div>
              ))}
            </Slider>
          </Card>
        </div>
        <div>
          <div className="flex h-full flex-col">
            <h4 className="pl-2 text-xl font-black text-main-50 dark:text-white">
              QUICK ACCESS
            </h4>
            <Card extra="h-full pb-7 p-[20px]">
              <div className="relative flex h-full flex-row justify-between pl-[20px]">
                <ul className="">
                  <li className="lead list-disc">Hoiana Website</li>
                  <li className="lead list-disc">Hoiana Linkedln</li>
                  <li className="lead list-disc">Hoiana Careers Website</li>
                  <li className="lead list-disc">Hoiana Careers Facebook</li>
                  <li className="lead list-disc">Hoiana Academy</li>
                  <li className="lead list-disc">SAP SuccessFactor</li>
                  <li className="lead list-disc">Workforce Management</li>
                  <li className="lead list-disc">Speak Up Chanel</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div className="col-span-3 ">
          <div className="mt-5 grid  grid-cols-1 gap-5 xl:grid-cols-2">
            <div className="mb-5">
              <h4 className="pl-2 text-xl font-bold text-main-50 dark:text-white">
                NEWS FEEDS
              </h4>
              <div className="h-full">
                <NewsFeedItem disableHeader />
              </div>
            </div>
            <div className="mb-5">
              <h4 className="pl-2 text-xl font-bold text-main-50 dark:text-white">
                ANNOUNCEMENTS
              </h4>
              <div className="h-full">
                <NewsFeedItem disableHeader />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5 grid grid-cols-1  rounded-[20px]">
            <h4 className="pl-2 text-xl font-bold text-main-50 dark:text-white">
              FORM & TEMPLATES
            </h4>
            <Card extra="pb-7 p-[20px]">
              <div className="relative flex flex-row justify-between pl-[20px]">
                <ul className="">
                  <li className="lead list-disc">Facility Management</li>
                  <li className="lead list-disc">Finance & Accounting</li>
                  <li className="lead list-disc">Gaming</li>
                  <li className="lead list-disc">Golf</li>
                  <li className="lead list-disc">Hoiana Village</li>
                  <li className="lead list-disc">Human Resources</li>
                  <li className="lead list-disc">IT</li>
                  <li className="lead list-disc">Laundry & Wardrobe</li>
                  <li className="lead list-disc">Legal</li>
                  <li className="lead list-disc">Logistics & Warehouse</li>
                  <li className="lead list-disc">Non-Gaming</li>
                  <li className="lead list-disc">Procurement</li>
                  <li className="lead list-disc">Sales & Marketing</li>
                  <li className="lead list-disc">Security & Surveillance</li>
                  <li className="lead list-disc">Transportation</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div className="col-span-3 ">
          <div className="">
            <h4 className="pl-2 text-xl font-bold text-main-50 dark:text-white">
              SUGGESTIONS & FEEDBACK
            </h4>
            <Card extra=" p-[20px]">
              <div className="flex max-w-full flex-col gap-x-4">
                <textarea
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="We'd love to hear from you."
                />
                <button
                  type="submit"
                  className="mt-5 h-fit w-fit flex-none self-end rounded-md bg-main-50 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-main-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Submit
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
