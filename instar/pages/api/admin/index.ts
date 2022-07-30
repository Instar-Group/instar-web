import { empty } from "@prisma/client/runtime";
import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";
import { json } from "stream/consumers";
import prisma from "../prisma";

export default  async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not allowed" });
  }

  var now = null;

  const newEventData = JSON.parse(req.body);

  if (newEventData.houseName === "Gladiators") {
    const addedPoints = newEventData.pointsAlloted;

    // Updating Total Score of house
    const updateScore = await prisma.gladiators.update({
      data: {
        totalScore: {
          increment: addedPoints,
        },
      },
      where: {
        id: "1",
      },
    });

    // Single Event Persistance
    now = moment().format("YYYY-MM-DD");
    // Fetching latest record
    const latestRecord = await prisma.newEvent.findMany({
      where: {
        houseName: "Gladiators",
        eventName: newEventData.eventName,
      },
      take: -1,
    });

    if (Object.keys(latestRecord).length !== 0) {
      const timeOfLatestRecord = latestRecord[0].createdAt;
      const recordId = latestRecord[0].id;
      const houseOfLatestRecord = latestRecord[0].houseName;
      var date = moment(timeOfLatestRecord);
      var timeComponent = date.utc().format("YYYY-MM-DD");
      // Checking if the latest event should be updated or a new event should be created
      if (
        now === timeComponent &&
        houseOfLatestRecord === newEventData.houseName
      ) {
        const updateEventScore = await prisma.newEvent.update({
          data: {
            pointsAlloted: {
              increment: addedPoints,
            },
          },
          where: {
            id: recordId,
          },
        });
      } else {
        const savedNewEvent = await prisma.newEvent.create({
          data: newEventData,
        });
      }
    } else {
      const savedNewEvent = await prisma.newEvent.create({
        data: newEventData,
      });
    }
  }
  if (newEventData.houseName === "Knights") {
    const addedPoints = newEventData.pointsAlloted;

    const updateScore = await prisma.knights.update({
      data: {
        totalScore: {
          increment: addedPoints,
        },
      },
      where: {
        id: "2",
      },
    });
    // Single Event Persistance
    now = moment().format("YYYY-MM-DD");
    // Fetching latest record
    const latestRecord = await prisma.newEvent.findMany({
      where: {
        houseName: "Knights",
        eventName: newEventData.eventName,
      },
      take: -1,
    });

    if (Object.keys(latestRecord).length !== 0) {
      const timeOfLatestRecord = latestRecord[0].createdAt;
      const recordId = latestRecord[0].id;
      const houseOfLatestRecord = latestRecord[0].houseName;
      var date = moment(timeOfLatestRecord);
      var timeComponent = date.utc().format("YYYY-MM-DD");
      // Checking if the latest event should be updated or a new event should be created
      if (
        now === timeComponent &&
        houseOfLatestRecord === newEventData.houseName
      ) {
        const updateEventScore = await prisma.newEvent.update({
          data: {
            pointsAlloted: {
              increment: addedPoints,
            },
          },
          where: {
            id: recordId,
          },
        });
      } else {
        const savedNewEvent = await prisma.newEvent.create({
          data: newEventData,
        });
      }
    } else {
      const savedNewEvent = await prisma.newEvent.create({
        data: newEventData,
      });
    }
  }
  if (newEventData.houseName === "Challengers") {
    const addedPoints = newEventData.pointsAlloted;

    const updateScore = await prisma.challengers.update({
      data: {
        totalScore: {
          increment: addedPoints,
        },
      },
      where: {
        id: "3",
      },
    });

    // Single Event Persistance
    now = moment().format("YYYY-MM-DD");
    // Fetching latest record
    const latestRecord = await prisma.newEvent.findMany({
      where: {
        houseName: "Challengers",
        eventName: newEventData.eventName,
      },
      take: -1,
    });

    if (Object.keys(latestRecord).length !== 0) {
      const timeOfLatestRecord = latestRecord[0].createdAt;
      const recordId = latestRecord[0].id;
      const houseOfLatestRecord = latestRecord[0].houseName;
      var date = moment(timeOfLatestRecord);
      var timeComponent = date.utc().format("YYYY-MM-DD");
      // Checking if the latest event should be updated or a new event should be created
      if (
        now === timeComponent &&
        houseOfLatestRecord === newEventData.houseName
      ) {
        const updateEventScore = await prisma.newEvent.update({
          data: {
            pointsAlloted: {
              increment: addedPoints,
            },
          },
          where: {
            id: recordId,
          },
        });
      } else {
        const savedNewEvent = await prisma.newEvent.create({
          data: newEventData,
        });
      }
    } else {
      const savedNewEvent = await prisma.newEvent.create({
        data: newEventData,
      });
    }
  }
  if (newEventData.houseName === "Warriors") {
    const addedPoints = newEventData.pointsAlloted;

    const updateScore = await prisma.warriors.update({
      data: {
        totalScore: {
          increment: addedPoints,
        },
      },
      where: {
        id: "4",
      },
    });

    // Single Event Persistance
    now = moment().format("YYYY-MM-DD");
    // Fetching latest record
    const latestRecord = await prisma.newEvent.findMany({
      where: {
        houseName: "Warriors",
        eventName: newEventData.eventName,
      },
      take: -1,
    });

    if (Object.keys(latestRecord).length !== 0) {
      const timeOfLatestRecord = latestRecord[0].createdAt;
      const recordId = latestRecord[0].id;
      const houseOfLatestRecord = latestRecord[0].houseName;
      var date = moment(timeOfLatestRecord);
      var timeComponent = date.utc().format("YYYY-MM-DD");
      // Checking if the latest event should be updated or a new event should be created
      if (
        now === timeComponent &&
        houseOfLatestRecord === newEventData.houseName
      ) {
        const updateEventScore = await prisma.newEvent.update({
          data: {
            pointsAlloted: {
              increment: addedPoints,
            },
          },
          where: {
            id: recordId,
          },
        });
      } else {
        const savedNewEvent = await prisma.newEvent.create({
          data: newEventData,
        });
      }
    } else {
      const savedNewEvent = await prisma.newEvent.create({
        data: newEventData,
      });
    }
  }

  res.json("success");
};
