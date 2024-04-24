//Required External Modules and Interfaces
import express, { Request, Response } from "express";
import * as exchangeService from "./Exchange.service";

// Router Definition
export const exchangeRouter = express.Router();

/* Controller Definitions */
// GET items
exchangeRouter.get("/", async (req: Request, res: Response) => {
    try {
        const averageMidPrice = await exchangeService.getAverageMidPrice();
        res.status(200).send({ averageMidPrice });
    } catch (e) {
        res.status(500).send(e.message);
    }
});