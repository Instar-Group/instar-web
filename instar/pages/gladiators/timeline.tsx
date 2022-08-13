import InstarLogo from "components/InstarLogo";
import Head from "next/head";
import Image from "next/image";
import { PrismaClient, newEvent } from "@prisma/client";
import prisma from "pages/api/prisma";
import { TimelineEvent } from "components/TimelineEvent";

export const getServerSideProps = async () => {
  const Events: any = await prisma.newEvent.findMany({
    where: {
      houseName: "Gladiators",
    },
    take: -8,
    select: {
      id: true,
      houseName: true,
      eventName: true,
      pointsAlloted: true,
      createdAt: true,
    },
  });
  const fetchedEvents: any = JSON.stringify(Events);
  return {
    props: { fetchedEvents },
  };
};

const timeline = ({ fetchedEvents }: { fetchedEvents: any }) => {
  const latestEvents: any = JSON.parse(fetchedEvents);
  return (
    <div>
      <Head>
        <title>Timeline</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex items-center flex-col justify-center">
        <InstarLogo />
        <div className="flex scale-50 md:scale-75 lg:scale-100 items-start w-full justify-around h-full  ">
          {/* Timeline */}
          <div className=" text-white text-2xl text-center space-x-8  mt-28 flex flex-row">
            <div className="flex flex-col space-y-4">
              {latestEvents.reverse().map((event: any, i: number) => (
                <TimelineEvent content={event} key={i} />
              ))}
            </div>
          </div>
          {/* House Logo */}
          <div>
            <div className="logo mt-5 pr-80">
              <Image
                src="/images/Emerald.svg"
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="logo-text text-3xl">Gladiators</span>
            </div>
          </div>
          {/* Captain & Vice Captain */}
          <div className="flex flex-col text-white text-2xl">
            <span>Captain:xyz</span>
            <span>Vice Captain:xyz</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default timeline;
