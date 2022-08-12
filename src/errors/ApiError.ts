class ApiError{
    public readonly statusCode;
    public readonly message;

    constructor(message: string, statusCode: number = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
}

export { ApiError }