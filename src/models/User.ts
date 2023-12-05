import { randomUUID } from 'crypto';
import { users } from '../database/users';
import { Tweet } from './Tweet';

export class User {
	private id: string;
	private _username: string;
	private _followers: User[] = [];
	private _following: User[] = [];
	private _tweets: Tweet[] = [];
	private _likedTweets: Tweet[] = [];
	constructor(
		private name: string,
		private email: string,
		_username: string,
		private password: string
	) {
		if (User.isUsernameTaken(_username, users)) {
			throw new Error('Username já está em uso. Escolha outro.');
		}

		this.id = randomUUID();
		this._username = _username;
		users.push(this);
	}

	get followers(): User[] {
		return this._followers;
	}

	get username(): string {
		return this._username;
	}

	get tweets(): Tweet[] {
		return this._tweets;
	}

	get likedTweets(): Tweet[] {
		return this._likedTweets;
	}

	sendTweet(content: string): Tweet {
		const newTweet = new Tweet(content, 'normal', this);
		this._tweets.push(newTweet);
		console.log(`${this.name} Tweet sent.`);
		return newTweet;
	}

	follow(userToFollow: User) {
		if (
			this._following.includes(userToFollow) ||
			userToFollow.username === this.username
		) {
			throw new Error(
				`Você já está seguindo o user ${userToFollow.username}, e não pode seguir a si mesmo;`
			);
		}
		userToFollow._followers.push(this);
		this._following.push(userToFollow);
		console.log(
			`<${userToFollow.username}> foi seguido por <${this.username}>`
		);
	}

	showFeed() {
		console.log(`<${this.username} Feed >`);
		this.showTweets();

		this._following.forEach((user) => {
			user.showTweets();
		});
	}

	showTweets(): void {
		this._tweets.forEach((tweet) => {
			console.log(`<@${this.username}: ${tweet.content}>
                  `);
			if (tweet.likes >= 2) {
				console.log(
					`[${tweet.likedBy[0].username} and other ${
						tweet.likedBy.length - 1
					} user liked this]`
				);
			} else if (tweet.likes === 1) {
				console.log(`[${tweet.likedBy[0].username} liked this]`);
			}
			if (tweet.replys.length !== 0) {
				tweet.showReplies();
			}
			console.log('---------------------');
		});
	}

	private static isUsernameTaken(username: string, userList: User[]): boolean {
		return userList.some((user) => user.username === username);
	}
}