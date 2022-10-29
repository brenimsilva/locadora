import {Request, Response} from 'express';

class MainController{
    public home(req: Request, res: Response) {
        res.json({
            message: "Welcome"
        });
    }
}

export const mainController = new MainController();