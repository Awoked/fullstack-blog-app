/*
  Warnings:

  - You are about to drop the `HeroSectionContent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ParallaxContentSectionContent` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Blog` ADD COLUMN `RawContent` MEDIUMTEXT NULL;

-- DropTable
DROP TABLE `HeroSectionContent`;

-- DropTable
DROP TABLE `ParallaxContentSectionContent`;

-- CreateTable
CREATE TABLE `Pages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `PageTitle` VARCHAR(191) NOT NULL,
    `PageUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
