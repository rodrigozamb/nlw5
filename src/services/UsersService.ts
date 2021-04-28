import {getCustomRepository, Repository} from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'
import { User } from '../entities/User'

class UsersService{

    private usersRepository:Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create(email:string){
        
        const userAlreadyExists = await this.usersRepository.findOne({
            email
        })
        if(userAlreadyExists){
            return userAlreadyExists
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user);
        return user;
    }

    async findByEmail(email:string){
        const user = await this.usersRepository.findOne({
            email
        })
        return user
    }
}


export {UsersService}