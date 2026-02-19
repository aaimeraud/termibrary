import { Database } from "bun:sqlite";

export const db = new Database("src/database/termibrary.db");

db.run(`
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        isRead INTEGER NOT NULL CHECK (isRead IN (0, 1))
    )`);

db.run(`
    CREATE TABLE IF NOT EXISTS user(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        favoriteBook TEXT NOT NULL
    )`);
