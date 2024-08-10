import express from "express";
import { DbInstance } from "./db.js";

const app = express();
const db = DbInstance;


app.get('/', async (req, res) => {
    const insertData = await db.addProcessInfo("3452jlkhfalksdf", 1, "first insert");
    console.log({ insertData });
    const processdata = await db.getProcessInfo("3452jlkhfalksdf");
    res.json(processdata);
});

app.listen(3000);