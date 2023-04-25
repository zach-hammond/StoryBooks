/*
  Warnings:

  - Added the required column `outcome` to the `Wager` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN "outcome" BOOLEAN;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wager" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "outcome" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    CONSTRAINT "Wager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Wager_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Wager" ("amount", "gameId", "id", "userId") SELECT "amount", "gameId", "id", "userId" FROM "Wager";
DROP TABLE "Wager";
ALTER TABLE "new_Wager" RENAME TO "Wager";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
