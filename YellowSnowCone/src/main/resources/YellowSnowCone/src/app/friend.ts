import { User } from './user';

export class Friend {
    relationid: number;
    userid1: number;
    userid2: number;
    status: number;
    user1: User;
    user2: User;
}