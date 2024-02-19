"use client";
import Image from "next/image";
import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const session = useSession();
  console.log(session?.data?.user);

  const signInHandler = async () => {
    await signIn("google");
  };
  const signOutHandler = async () => {
    await signOut();
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1>Todo</h1>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
          {session?.data?.user ? (
            <>
              <Image
                src={
                  session?.data?.user?.image ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                width={33}
                height={28}
                alt="Profile photo"
                className="rounded-xl"
              />
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={signOutHandler}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={signInHandler}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
