/*
  Warnings:

  - You are about to drop the column `cliend_id` on the `pruchases` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `pruchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pruchases" DROP COLUMN "cliend_id",
ADD COLUMN     "client_id" TEXT NOT NULL;
