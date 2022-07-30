import InstarLogo from "components/InstarLogo";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import prisma from "./api/prisma";

export const getServerSideProps = async () => {
  const gladiatorsScore = await prisma.gladiators.findUnique({
    where: {
      id: "1",
    },
    select: {
      totalScore: true,
    },
  });
  const knightsScore = await prisma.knights.findUnique({
    where: {
      id: "2",
    },
    select: {
      totalScore: true,
    },
  });
  const ChallengersScore = await prisma.challengers.findUnique({
    where: {
      id: "3",
    },
    select: {
      totalScore: true,
    },
  });
  const warriorsScore = await prisma.warriors.findUnique({
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

const Home: NextPage = ({
  gladiatorsScore,
  ChallengersScore,
  knightsScore,
  warriorsScore,
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
          {/* Challengers */}
          <Link href="/challengers/timeline">
            <div className="challengers cursor-pointer">
              <div className="mx-5">
                <div className="text-container">
                  <span>Challengers</span>
                  <span>Score : {ChallengersScore.totalScore}</span>
                </div>
              </div>
            </div>
          </Link>
          {/* Gladiators */}
          <Link  href="/gladiators/timeline">
            <div className="gladiators cursor-pointer">
              <div className="mx-1">
                <div className=" text-container">
                  <span>Gladiators</span>
                  <span>Score : {gladiatorsScore.totalScore}</span>
                </div>
              </div>
            </div>
          </Link>
          {/* Warriors */}
          <Link href="/warriors/timeline">
            <div className="warriors cursor-pointer">
              <div className="mx-5">
                <div className=" text-container">
                  <span>Warriors</span>
                  <span>Score : {knightsScore.totalScore}</span>
                </div>
              </div>
            </div>
          </Link>
          {/* Knights */}
          <Link href="/knights/timeline">
            <div className="knights cursor-pointer">
              <div className="mx-5">
                <div className=" text-container">
                  <span>Knights</span>
                  <span>Score : {warriorsScore.totalScore}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
