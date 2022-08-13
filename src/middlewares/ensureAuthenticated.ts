import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ApiError } from "../errors/ApiError";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IToken{
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken){
        throw new ApiError("Token missing", 401)
    }

    const [, token] = authToken.split(" ")

    try{
       const {sub} = verify(token, "f27bbca8396ec3bda41f0f3d84fdcc3b") as IToken       
       const userRepo = new UserRepository();
       const user = userRepo.findById(sub);

       if(!user){
          throw new ApiError("user not alowed", 403);
       }
    }catch(e){
        throw new ApiError("token invalid", 401)
    }
    
    next()
}