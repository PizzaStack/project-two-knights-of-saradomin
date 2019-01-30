import { Users } from './users';
import { Posts } from './posts';

export class PostInteractions {
    interactionid: number;
    postid: number;
    userid: Users;
    type: number;
}