interface CreateUserDTO{
    name: string;
    // username: string;
    password: string;
    email: string;
    driver_license: string;
    id?: string;
    avatar?: string;
}

export { CreateUserDTO }