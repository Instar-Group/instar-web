import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Instar</title>
        <meta name="description" content="Check house scores with ease" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex flex-col relative items-center justify-center ">
        {/* LOGO */}
        <div className="logo">
          <Image
            src="/images/InstarLogo.svg"
            alt="Picture of the author"
            width={70}
            height={70}
          />
          <span className="logo-text">Instar</span>
        </div>

        {/* House Scores */}
        <div className="house-points">
          {/* Challengers */}
          <div class="challengers">
            <div class="mx-5">
              <div class="text-container">
                <span>Challengers</span>
                <span>Score : 0</span>
              </div>
            </div>
          </div>
          {/* Gladiators */}
          <div class="gladiators">
            <div class="mx-5">
              <div class=" text-container">
                <span>Gladiators</span>
                <span>Score : 0</span>
              </div>
            </div>
          </div>
          {/* Warriors */}
          <div class="warriors">
            <div class="mx-5">
              <div class=" text-container">
                <span>Warriors</span>
                <span>Score : 0</span>
              </div>
            </div>
          </div>
          {/* Knights */}
          <div class="knights">
            <div class="mx-5">
              <div class=" text-container">
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
