import { Users } from './users';

export class Friend {
    relationid: number;
    userid1: number;
    userid2: number;
    status: number;
    user1: Users;
    user2: Users;
}