import { Users } from './users';
import { PostInteractions } from './postinteractions';

export class Posts {
	postid: number;
	userid: number;
	textcontents: string;
	imagelocation: string;
	repostid: number;
	user: Users
	postinteractions: PostInteractions[]
}