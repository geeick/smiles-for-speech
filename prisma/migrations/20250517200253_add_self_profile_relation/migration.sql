/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified",
DROP COLUMN "image",
ALTER COLUMN "password" SET NOT NULL;

-- CreateTable
CREATE TABLE "SelfProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "diagnosis" TEXT,
    "seekingDiagnosis" BOOLEAN NOT NULL,
    "challenges" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SelfProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaretakerProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lovedOnesCount" INTEGER NOT NULL,
    "diagnosisStatus" TEXT NOT NULL,
    "attendsSchool" BOOLEAN NOT NULL,
    "receivesServices" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CaretakerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LovedOne" (
    "id" TEXT NOT NULL,
    "caretakerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "diagnosisStatus" TEXT NOT NULL,
    "concerns" TEXT,
    "seekingSupport" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LovedOne_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SelfProfile_userId_key" ON "SelfProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CaretakerProfile_userId_key" ON "CaretakerProfile"("userId");

-- AddForeignKey
ALTER TABLE "SelfProfile" ADD CONSTRAINT "SelfProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaretakerProfile" ADD CONSTRAINT "CaretakerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LovedOne" ADD CONSTRAINT "LovedOne_caretakerId_fkey" FOREIGN KEY ("caretakerId") REFERENCES "CaretakerProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
