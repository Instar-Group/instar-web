-- CreateTable
CREATE TABLE "knights" (
    "id" STRING NOT NULL,
    "totalScore" INT4 NOT NULL DEFAULT 0,

    CONSTRAINT "knights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "challengers" (
    "id" STRING NOT NULL,
    "totalScore" INT4 NOT NULL DEFAULT 0,

    CONSTRAINT "challengers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "warriors" (
    "id" STRING NOT NULL,
    "totalScore" INT4 NOT NULL DEFAULT 0,

    CONSTRAINT "warriors_pkey" PRIMARY KEY ("id")
);
