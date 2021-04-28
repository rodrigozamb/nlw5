import {Request, Response, response} from 'express'
import { UsersService } from '../services/UsersService'



class UsersController{
    
    async create(req:Request,res:Response){
        const {email} = req.body
        const usersService = new UsersService();
        const user = await usersService.create(email)

        return res.json(user)
    }
}

export {UsersController}