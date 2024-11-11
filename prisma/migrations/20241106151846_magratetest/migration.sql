/*
  Warnings:

  - The primary key for the `tbl_professor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `tbl_professor` table. All the data in the column will be lost.
  - Added the required column `id_aluno` to the `tbl_professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_professor` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_aluno` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_aluno`);
