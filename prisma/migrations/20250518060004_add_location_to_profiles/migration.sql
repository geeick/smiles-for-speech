/*
  Warnings:

  - You are about to drop the column `attendsSchool` on the `CaretakerProfile` table. All the data in the column will be lost.
  - You are about to drop the column `diagnosisStatus` on the `CaretakerProfile` table. All the data in the column will be lost.
  - You are about to drop the column `receivesServices` on the `CaretakerProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CaretakerProfile" DROP COLUMN "attendsSchool",
DROP COLUMN "diagnosisStatus",
DROP COLUMN "receivesServices",
ADD COLUMN     "location" TEXT;
