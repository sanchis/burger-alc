/*
  Warnings:

  - You are about to drop the `BurgerMarks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BurgerMarks" DROP CONSTRAINT "BurgerMarks_burgerId_fkey";

-- DropTable
DROP TABLE "BurgerMarks";

-- CreateTable
CREATE TABLE "Marks" (
    "id" TEXT NOT NULL,
    "mark" DECIMAL(65,30) NOT NULL,
    "comment" TEXT NOT NULL,
    "burgerId" TEXT NOT NULL,

    CONSTRAINT "Marks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Marks" ADD CONSTRAINT "Marks_burgerId_fkey" FOREIGN KEY ("burgerId") REFERENCES "Burger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
