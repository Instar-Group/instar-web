import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div classNameName="">
      <Head>
        <title>Instar</title>
        <meta name="description" content="Check house scores with ease" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main classNameName="flex flex-col relative items-center justify-center ">
        {/* LOGO */}
        <div classNameName="logo">
          <Image
            src="/images/InstarLogo.svg"
            alt="Picture of the author"
            width={70}
            height={70}
          />
          <span classNameName="logo-text">Instar</span>
        </div>

        {/* House Scores */}
        <div classNameName="house-points">
          {/* Challengers */}
          <div className="challengers">
            <div className="mx-5">
              <div className="text-container">
                <span>Challengers</span>
                <span>Score : 0</span>
              </div>
            </div>
          </div>
          {/* Gladiators */}
          <div className="gladiators">
            <div className="mx-5">
              <div className=" text-container">
                <span>Gladiators</span>
                <span>Score : 0</span>
              </div>
            </div>
          </div>
          {/* Warriors */}
          <div className="warriors">
            <div className="mx-5">
              <div className=" text-container">
                <span>Warriors</span>
                <span>Score : 0</span>
              </div>
            </div>
          </div>
          {/* Knights */}
          <div className="knights">
            <div className="mx-5">
              <div className=" text-container">
                <span>Knights</span>
                <span>Score : 0</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
