import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import usersjson from '../../resources/users.json';

export class UserController extends CrudController{
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response):void{
        throw new Error("Belum Diimplementasikan");
    }
    public read(req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response):void{
        res.json(usersjson);
    }
    public update(req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response):void{
        throw new Error("Belum Diimplementasikan");
    }
    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response):void{
        throw new Error("Belum Diimplementasikan");
    }
}