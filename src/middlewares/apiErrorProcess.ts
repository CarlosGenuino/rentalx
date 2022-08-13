import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";

function processError(err: Error, request: Request, response: Response, next: NextFunction) {
    if (err instanceof ApiError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal Server error: ${err.message}`
    })
}

export { processError };