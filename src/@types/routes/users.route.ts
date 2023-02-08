import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "Thalis" }];
  res.status(StatusCodes.OK).send(users);
});

usersRoute.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, nex: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
  }
);

usersRoute.post("/users", (req: Request, res: Response, nex: NextFunction) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, nex: NextFunction) => {
    const uuid = req.params.uuid;
    const modiFiedUser = req.body;
    modiFiedUser.uuid = uuid;
    res.status(StatusCodes.OK).send(modiFiedUser);
  }
);

usersRoute.delete(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, nex: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
  }
);

export default usersRoute;