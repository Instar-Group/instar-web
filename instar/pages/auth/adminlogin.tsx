import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {  signIn } from "next-auth/react";

const adminlogin: NextPage = ({ csrfToken }) => {
  const handleSignIn = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    signIn("credentials", {
      username: username,
      password: password,
      callbackUrl: "/admin/adminconsole",
    });
  };
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className=" flex flex-col relative items-center space-y-10 justify-center">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/images/InstarLogo.svg"
            alt="Logo"
            width={70}
            height={70}
          />
          <span className="logo-text">Instar</span>
        </div>

        {/* Login Form */}
        <form
          className="bg-slate-500 flex flex-col items-center  p-7 rounded-3xl space-y-6 shadow-2xl"
          onSubmit={handleSignIn}
        >
          <span className="text-white text-3xl">Admin Login</span>
          {/* Username input */}
          <div>
            <label className="block text-slate-200 text-base font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              id="username"
              type="text"
            />
          </div>
          {/* Password input */}
          <div>
            <label className="block text-slate-200 text-base font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Login
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};



export default adminlogin;
