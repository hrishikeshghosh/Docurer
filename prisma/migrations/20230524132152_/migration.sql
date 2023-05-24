/*
  Warnings:

  - You are about to drop the column `appointmentsId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `paymentsId` on the `users` table. All the data in the column will be lost.
  - Added the required column `usersId` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usersId` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_appointmentsId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_paymentsId_fkey`;

-- AlterTable
ALTER TABLE `appointments` ADD COLUMN `usersId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `payments` ADD COLUMN `usersId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `appointmentsId`,
    DROP COLUMN `paymentsId`;

-- AddForeignKey
ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
