import { Request, Response } from "express";

class InitialController {
  public show(req: Request, res: Response): Response {
    return res.json("Hellow World");
  }
  public send(req: Request, res: Response): Response {
    return res.json(req.body);
  }
  public showUnic(req: Request, res: Response): Response {
    return res.json(req.params.id);
  }
}

export default InitialController;
