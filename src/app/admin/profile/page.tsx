'use client';

import InputField from 'components/fields/InputField';

const ProfileOverview = () => {
  return (
    <div className="divide-y divide-white/5">
      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 ">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Use a permanent address where you can receive mail.
          </p>
        </div>

        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full flex items-center gap-x-8">
              <img
                src="/img/avatars/avatar4.png"
                alt=""
                className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
              />
              <div>
                <button
                  type="button"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-white/20"
                >
                  Change avatar
                </button>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  JPG, GIF or PNG. 1MB max.
                </p>
              </div>
            </div>

            <div className="sm:col-span-3">
              <InputField
                extra="mb-3"
                label="First name"
                placeholder="..."
                id="first-name"
                value="Nguyen"
                type="text"
              />
            </div>

            <div className="sm:col-span-3">
              <InputField
                extra="mb-3"
                label="Last name"
                placeholder="..."
                id="last-name"
                value="Khai"
                type="text"
              />
            </div>
            <div className="col-span-full">
              <InputField
                extra="mb-3"
                label="Email address"
                placeholder="..."
                id="email"
                value="test@gmail.com"
                type="text"
              />
            </div>
            <div className="col-span-full">
              <InputField
                extra="mb-3"
                label="Mã số nhân viên"
                placeholder="..."
                id="msnv"
                value="A123"
                type="text"
              />
            </div>
          </div>

          <div className="mt-8 flex">
            <button
              type="submit"
              className="rounded-md bg-main-50 px-3 py-2 text-sm font-semibold text-white  shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 ">
            Change password
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Update your password associated with your account.
          </p>
        </div>

        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full">
              <InputField
                extra="mb-3"
                label="Current password"
                placeholder=""
                id="current-password"
                value=""
                type="text"
              />
            </div>

            <div className="col-span-full">
              <InputField
                extra="mb-3"
                label="New password"
                placeholder=""
                id="new-password"
                value=""
                type="text"
              />
            </div>

            <div className="col-span-full">
              <InputField
                extra="mb-3"
                label="Confirm password"
                placeholder=""
                id="confirm-password"
                value=""
                type="text"
              />
            </div>
          </div>
          <div className="mt-8 flex">
            <button
              type="submit"
              className="rounded-md bg-main-50 px-3 py-2 text-sm font-semibold text-white  shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 ">Delete account</h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            No longer want to use our service? You can delete your account here.
            This action is not reversible. All information related to this
            account will be deleted permanently.
          </p>
        </div>

        <form className="flex items-start md:col-span-2">
          <button
            type="submit"
            className="rounded-md  bg-red-500 px-3 py-2 text-sm font-semibold text-white  shadow-sm hover:bg-red-400"
          >
            Yes, delete my account
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileOverview;
