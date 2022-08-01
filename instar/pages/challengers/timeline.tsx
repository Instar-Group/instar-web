import InstarLogo from "components/InstarLogo";
import Head from "next/head";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { PrismaClient,newEvent } from "@prisma/client";
import prisma from "pages/api/prisma";
import { TimelineEvent } from "components/TimelineEvent";



export const getServerSideProps = async () =>{
  const Events: newEvent = await prisma.newEvent.findMany({
    where:{
      houseName: "Challengers"
    },
    take:-12,
    select:{
      id:true,
      houseName:true,
      eventName:true,
      pointsAlloted:true,
      createdAt:true,
    }
  })
  const fetchedEvents = JSON.stringify(Events)
  return {
    props: {fetchedEvents}
  }
}


const timeline = ({fetchedEvents}) => {
  const latestEvents = JSON.parse(fetchedEvents)
  return (
    <div>
      <Head>
        <title>Timeline</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex items-center flex-col justify-center">
        <InstarLogo />
        <div className="flex items-start w-full justify-around h-full space-x ">
            <div className="flex flex-row h-full px-4">
              <div  className=" mt-28  justify-start border  h-3/4 ">
              </div>
                <div className=" text-white text-2xl text-center space-x-8  mt-28 flex flex-row">
                  <div className="flex flex-col space-y-4">
                    {latestEvents.reverse().map((event, i:number) =>(
                        <TimelineEvent content={event} key={i} />
                        ))}
                  </div>
                </div>
            </div>
            {/* House Logo */}
            <div>
              <div className="logo mt-5 pr-80">
                <Image
                  src="/images/Ruby.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="logo-text text-3xl">Challengers</span>
              </div>
            </div>
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
