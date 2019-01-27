export class User{
    constructor(
        public userId: number,
        public email: string,
        public password: string,
        public firstname: string,
        public lastname: string,
        public profilePicturePath: string = null
    ) {}
}