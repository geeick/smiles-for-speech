-- AlterTable
ALTER TABLE "CaretakerProfile" ADD COLUMN     "consent" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "LovedOne" ADD COLUMN     "consent" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "SelfProfile" ALTER COLUMN "consent" SET DEFAULT false;
