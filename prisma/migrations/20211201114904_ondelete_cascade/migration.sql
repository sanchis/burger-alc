-- DropForeignKey
ALTER TABLE "Burger" DROP CONSTRAINT "Burger_shopId_fkey";

-- DropForeignKey
ALTER TABLE "Mark" DROP CONSTRAINT "Mark_burgerId_fkey";

-- AddForeignKey
ALTER TABLE "Burger" ADD CONSTRAINT "Burger_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mark" ADD CONSTRAINT "Mark_burgerId_fkey" FOREIGN KEY ("burgerId") REFERENCES "Burger"("id") ON DELETE CASCADE ON UPDATE CASCADE;
