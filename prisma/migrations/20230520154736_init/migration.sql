-- CreateTable
CREATE TABLE `Doctors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `Specialist_type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `isVerified` BOOLEAN NOT NULL DEFAULT true,
    `rating` INTEGER NOT NULL DEFAULT 0,
    `fees` INTEGER NOT NULL DEFAULT 500,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
