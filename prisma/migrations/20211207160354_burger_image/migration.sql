/*
  Warnings:

  - Added the required column `description` to the `Burger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Burger" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "price" DECIMAL(65,30);
