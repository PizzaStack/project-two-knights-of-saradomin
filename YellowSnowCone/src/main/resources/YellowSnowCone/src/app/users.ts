export class Users {
    constructor(
        public userid: number,
        public email: string,
        public password: string,
        public firstname: string,
        public lastname: string,
        public profilePicturePath: string = null, 
        public enabled: boolean
    ) {}
}