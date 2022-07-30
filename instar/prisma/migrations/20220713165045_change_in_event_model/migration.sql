/*
  Warnings:

  - You are about to drop the `NewEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NewEvent";

-- CreateTable
CREATE TABLE "newEvent" (
    "id" STRING NOT NULL,
    "houseName" STRING NOT NULL,
    "eventName" STRING NOT NULL,
    "pointsAlloted" INT4 NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "newEvent_pkey" PRIMARY KEY ("id")
);
