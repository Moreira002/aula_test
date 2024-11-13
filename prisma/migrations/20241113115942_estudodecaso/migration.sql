/*
  Warnings:

  - The primary key for the `tbl_professor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_aluno` on the `tbl_professor` table. All the data in the column will be lost.
  - Added the required column `bairro` to the `tbl_professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `tbl_professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `tbl_professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_nascimento` to the `tbl_professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `tbl_professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_professor` to the `tbl_professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logradouro` to the `tbl_professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_professor` DROP PRIMARY KEY,
    DROP COLUMN `id_aluno`,
    ADD COLUMN `bairro` VARCHAR(191) NOT NULL,
    ADD COLUMN `cep` VARCHAR(191) NOT NULL,
    ADD COLUMN `cidade` VARCHAR(191) NOT NULL,
    ADD COLUMN `data_nascimento` VARCHAR(191) NOT NULL,
    ADD COLUMN `estado` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_professor` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `logradouro` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_professor`);

-- CreateTable
CREATE TABLE `tbl_aluno` (
    `id_aluno` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_aluno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
