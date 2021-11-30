/*
  Warnings:

  - You are about to drop the `Marks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Marks" DROP CONSTRAINT "Marks_burgerId_fkey";

-- DropTable
DROP TABLE "Marks";

-- CreateTable
CREATE TABLE "Mark" (
    "id" TEXT NOT NULL,
    "mark" DECIMAL(65,30) NOT NULL,
    "comment" TEXT NOT NULL,
    "burgerId" TEXT NOT NULL,

    CONSTRAINT "Mark_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mark" ADD CONSTRAINT "Mark_burgerId_fkey" FOREIGN KEY ("burgerId") REFERENCES "Burger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
