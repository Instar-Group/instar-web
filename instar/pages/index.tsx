import InstarLogo from "components/InstarLogo";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import prisma from "./api/prisma";

export const getServerSideProps = async () => {
  const gladiatorsScore: any = await prisma.gladiators.findUnique({
    where: {
      id: "1",
    },
    select: {
      totalScore: true,
    },
  });
  const knightsScore: any = await prisma.knights.findUnique({
    where: {
      id: "2",
    },
    select: {
      totalScore: true,
    },
  });
  const ChallengersScore: any = await prisma.challengers.findUnique({
    where: {
      id: "3",
    },
    select: {
      totalScore: true,
    },
  });
  const warriorsScore: any = await prisma.warriors.findUnique({
    where: {
      id: "4",
    },
    select: {
      totalScore: true,
    },
  });

  return {
    props: { gladiatorsScore, ChallengersScore, knightsScore, warriorsScore },
  };
};

const Home = ({
  gladiatorsScore,
  ChallengersScore,
  knightsScore,
  warriorsScore,
}: {
  gladiatorsScore: any;
  ChallengersScore: any;
  knightsScore: any;
  warriorsScore: any;
}) => {
  return (
    <div className="">
      <Head>
        <title>Instar</title>
        <meta name="description" content="Check house scores with ease" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex flex-col relative items-center justify-center ">
        {/* LOGO */}
        <InstarLogo />

        {/* House Scores */}
        <div className="house-points">
          {/* Gladiators */}
          <Link href="/gladiators/timeline">
            <div className="house-info">
              <div className="house-container">
                <Image src="/images/Emerald.svg" width={100} height={100} />
              </div>
              <div>
                <span className="logo-text text-3xl">Gladiators</span>
              </div>
              <div className="gladiators">
                <span className=" text-xl text-[#6BCB77]">
                  Score : {gladiatorsScore.totalScore}
                </span>
              </div>
            </div>
          </Link>
          {/* Warriors */}
          <Link href="/warriors/timeline">
            <div className="house-info">
              <div className="house-container">
                <Image src="/images/Sapphire.svg" width={100} height={100} />
              </div>
              <div>
                <span className="logo-text text-3xl">Warriors</span>
              </div>
              <div className="warriors">
                <span className=" text-xl text-[#72AAFC]">
                  Score : {warriorsScore.totalScore}
                </span>
              </div>
            </div>
          </Link>
          {/* Knights */}
          <Link href="/knights/timeline">
            <div className="house-info">
              <div className="house-container">
                <Image src="/images/Topaz.svg" width={100} height={100} />
              </div>
              <div>
                <span className="logo-text text-3xl">Knights</span>
              </div>
              <div className="knights">
                <span className=" text-xl text-[#FFD93D]">
                  Score : {knightsScore.totalScore}
                </span>
              </div>
            </div>
          </Link>
          {/* Challengers */}
          <Link href="/challengers/timeline">
            <div className="house-info">
              <div className="house-container">
                <Image src="/images/Ruby.svg" width={100} height={100} />
              </div>
              <div>
                <span className="logo-text text-3xl">Challengers</span>
              </div>
              <div className="challengers">
                <span className=" text-xl text-[#FF5252]">
                  Score : {ChallengersScore.totalScore}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
