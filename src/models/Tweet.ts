import { randomUUID } from 'crypto';
import { User } from './User';
import { tweets } from '../database/tweet';

export class Tweet {
	private id: string;
	private _replys: Tweet[] = [];
	private _likes: number = 0;
	private _likedBy: User[] = [];
	constructor(
		private _content: string,
		private type: string,
		private author: User
	) {
		this.id = randomUUID();
		tweets.push(this);
	}
	get content(): string {
		return this._content;
	}

	get replys(): Tweet[] {
		return this._replys;
	}
	get likedBy(): User[] {
		return this._likedBy;
	}

	get likes(): number {
		return this._likes;
	}

	addReply(user: User, content: string) {
		const newReply = new Tweet(content, 'reply', user);
		this._replys.push(newReply);
		user.tweets.push(newReply);
	}

	addLike(user: User) {
		if (!this._likedBy.includes(user)) {
			this._likes++;
			this._likedBy.push(user);
			user.likedTweets.push(this);
			console.log(`@${user.username} liked this tweet`);
		} else {
			throw new Error(`Um usuário não pode curtir o mesmo Tweet duas vezes!`);
		}
	}

	show(): void {
		console.log(`>@${this.author.username}: ${this._content}`);
	}

	showReplies(): void {
		if (this._replys.length > 0) {
			this.replys.forEach((reply) => {
				console.log(`> @${reply.author.username} - ${reply.content}`);
			});
		} else {
			console.log('No replies.');
		}
	}
}