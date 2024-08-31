import express from "express";
import { DbInstance } from "./db.js";

const app = express();
const db = DbInstance;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000))
}

async function startProcess() {
    await sleep(2);
    await db.addProcessInfo("requestId-2", 1, "step1");
    await sleep(10);
    await db.addProcessInfo("requestId-2", 2, "step2");
    await sleep(10);
    await db.addProcessInfo("requestId-2", 3, "step3");
    await sleep(10);
    await db.addProcessInfo("requestId-2", 4, "step4");
    await sleep(10);
    await db.addProcessInfo("requestId-2", 5, "step5");
}

app.get('/start-process', async (req, res) => {
    startProcess();
    return res.json({ success: true, message: "Process has been started" });
});

app.get("/process-info", async (req, res) => {
    const processdata = await db.getProcessInfo("requestId-1");
    res.json(processdata);
})

app.listen(3000);