/*
  Warnings:

  - You are about to drop the column `Link` on the `HeroSectionContent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `HeroSectionContent` DROP COLUMN `Link`,
    ADD COLUMN `linkHref` VARCHAR(191) NULL;
