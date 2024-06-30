'use client';
import Default from 'components/auth/variants/DefaultAuthLayout';
import Checkbox from 'components/checkbox';
import InputField from 'components/fields/InputField';
import Link from 'next/link';
import { TbCompass } from 'react-icons/tb';

function SignInDefault() {
  return (
    <Default
      maincard={
        <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
          {/* Sign in section */}
          <div className="mt-[5vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <div className={`mb-5 flex flex-col items-center whitespace-nowrap`}>
              <TbCompass className=" h-[60px] w-[60px] text-main-50" />
              <p className=" text-[25px] text-main-50 ">
                WELL COME TO HOIANA COMPASS
              </p>
            </div>
            <h3 className="mb-2.5 text-center text-4xl font-bold text-navy-700 dark:text-white">
              Sign In
            </h3>
            <p className="mb-9 ml-1 text-center  text-base text-gray-600">
              Enter your email and password to sign in!
            </p>
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email/MSNV*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
            />
            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="mt-2 flex items-center">
                <Checkbox />
                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                  Keep me logged In
                </p>
              </div>
              <a
                className="text-sm font-medium text-gray-500 hover:text-gray-600 dark:text-white"
                href=" "
              >
                Forgot Password?
              </a>
            </div>
            <Link href="/admin">
              <button className="linear w-full rounded-xl bg-main-50 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-main-100 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                Sign In
              </button>
            </Link>

            <div className="mt-4">
              <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
                Not registered yet?
              </span>
              <a
                href="/auth/sign-up/default"
                className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-600 dark:text-white"
              >
                Create an account
              </a>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default SignInDefault;
