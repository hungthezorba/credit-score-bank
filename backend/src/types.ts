import { EntityManager } from "typeorm";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { createCreditHistoryLoader } from "./loader/createCreditHistoryLoader";

export type MyContext = {
  em: EntityManager;
  req: Request & {
    session: Session & Partial<SessionData> & { userId?: number };
  };
  res: Response;
  creditHistoryLoader: ReturnType<typeof createCreditHistoryLoader>;
};
