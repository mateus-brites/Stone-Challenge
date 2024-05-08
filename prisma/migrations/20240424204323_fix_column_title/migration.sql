/*
  Warnings:

  - You are about to drop the column `itle` on the `products` table. All the data in the column will be lost.
  - Added the required column `title` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "itle",
ADD COLUMN     "title" TEXT NOT NULL;
