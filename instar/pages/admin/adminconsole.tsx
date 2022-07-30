import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import HouseForm from "components/EventForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const adminconsole: NextPage = () => {
  // code for house selection
  let [house, setHouse] = useState("Challengers");

  // Route Protection Code
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/auth/adminlogin");
  }

  async function saveEvent(e) {
    e.preventDefault();
    const houseName = e.target.house.value;
    const eventName = e.target.event.value;
    const pointsAlloted = parseInt(e.target.points.value);

    const data = { houseName, eventName, pointsAlloted };
    const response = await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      toast.error(response.statusText);
    } else {
      toast.success("Score updated successfully!");
    }

    return await response.json();
  }

  return (
    <div>
      <ToastContainer />
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        {/* Header */}
        <header className="top-0 left-0 p-4 flex flex-row justify-between">
          {/* Icon */}
          <div className="cursor-pointer">
            <Link href="/">
              <Image
                src="/images/InstarLogo.svg"
                alt="logo"
                width="60"
                height="60"
              />
            </Link>
          </div>
          <span className="text-white text-3xl font-bold">Admin Console</span>
          {/* User Icon */}
          <div className="text-white w-50 h-60">
            <BiUserCircle size="70" />
          </div>
        </header>

        {/* Main Form */}
        <form onSubmit={saveEvent} className="space-y-14">
          <div className="flex items-center justify-around">
            {/* House Selection */}
            <HouseForm />
            {/* Event Selector */}
            <div className="flex flex-col  space-y-2">
              <label className="text-white">Select Event</label>
              <select
                className="text-xl cursor-pointer px-8 py-2 font-normal rounded transition ease-in-out"
                name="event"
                id="event"
              >
                <option value="Chrysaurus">Chrysaurus</option>
                <option value="Cricket">Cricket</option>
                <option value="Swimming">Swimming</option>
                <option value="Eco Minions">Eco Minions</option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
              </select>
            </div>

            {/* Points Selector */}
            <div className="flex  flex-col space-y-2">
              <label className="text-white">Allot Points</label>
              <select
                className="text-xl cursor-pointer px-8 py-2 font-normal rounded transition ease-in-out"
                name="points"
                id="points"
              >
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
              </select>
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
               focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
                 focus:outline-none "
            >
              Update Score
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default adminconsole;
