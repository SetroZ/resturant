/*
  Warnings:

  - Added the required column `Useremail` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "Useremail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_Useremail_fkey" FOREIGN KEY ("Useremail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
