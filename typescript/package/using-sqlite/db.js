import sqlite3_package from "sqlite3";
import * as uuid from "uuid";

const sqlite3 = sqlite3_package.verbose();


class DB {
    constructor() {
        this.db = new sqlite3.Database(":memory:", (error) => {
            if (error) {
                console.log("Error while connecting to the sqlite db", error.message);
            }
            console.log("connected to sqlite database");
        });

        this.db.serialize(() => {
            this.db.run(`CREATE TABLE IF NOT EXISTS process_info (
                id INTEGER PRIMARY KEY,
                uuid BLOB NOT NULL,
                step INTEGER,
                message TEXT
            )`);
        });

        this.insert = this.db.prepare(`INSERT INTO process_info (uuid, step, message) VALUES(?, ?, ?)`);
        this.insert.run(uuid.v4(), 1, "List fetched");
    }

    getProcessInfo = (requestId) => {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM process_info WHERE uuid="${requestId}"`, [], (err, rows) => {
                if (err) {
                   reject(err);
                }
                resolve(rows);
            });
        });
    }

    addProcessInfo = (requestId, step, message) => {
        return new Promise((resolve, reject) => {
            this.insert.run(requestId, step, message, (err) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        })
    }
}

const DbInstance = new DB();  
export {
    DbInstance
}
