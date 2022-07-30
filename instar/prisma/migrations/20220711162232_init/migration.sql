-- CreateTable
CREATE TABLE "NewEvent" (
    "id" STRING NOT NULL,
    "houseName" STRING NOT NULL,
    "eventName" STRING NOT NULL,
    "pointsAlloted" INT4 NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewEvent_pkey" PRIMARY KEY ("id")
);
