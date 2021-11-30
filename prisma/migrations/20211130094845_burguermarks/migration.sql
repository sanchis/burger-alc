-- CreateTable
CREATE TABLE "Shop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Burger" (
    "id" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Burger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BurgerMarks" (
    "id" TEXT NOT NULL,
    "mark" DECIMAL(65,30) NOT NULL,
    "comment" TEXT NOT NULL,
    "burgerId" TEXT NOT NULL,

    CONSTRAINT "BurgerMarks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shop_name_key" ON "Shop"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Burger_shopId_name_key" ON "Burger"("shopId", "name");

-- AddForeignKey
ALTER TABLE "Burger" ADD CONSTRAINT "Burger_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BurgerMarks" ADD CONSTRAINT "BurgerMarks_burgerId_fkey" FOREIGN KEY ("burgerId") REFERENCES "Burger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
