import { Request, Response, Router } from "express";
import {mainController} from "./controller/main.controller";

const router: Router = Router();

router.get('/', mainController.home);

export default router;