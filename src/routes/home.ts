import express, { Request } from "express";
import velocity from "../utilities/velocity";

const home = express.Router();

home.post(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      console.log(req.body);
      const time1 = Number(req.body.time1);
      const time2 = Number(req.body.time2);
      const distance1 = Number(req.body.distance1);
      const distance2 = Number(req.body.distance2);
      console.log([time1, time2, distance1, distance2]);

      const result = await velocity(time1, time2, distance1, distance2);
      console.log(result);
      res.send(JSON.stringify(result));
    } catch {
      console.log(`Unable to calculate`);
    }
  }
);

export default home;
