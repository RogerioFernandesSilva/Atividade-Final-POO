import { User } from './models/User';
import { Tweet } from './models/Tweet';
import { users } from './database/users';

const rogerio = new User(
	'Rogério',
	'rog.fernandes@yahoo.com.br',
	'rogeriosilva',
	'12345'
);
const andreia = new User(
	'Andreia',
	'andreia23@gmail.com',
	'Andreia',
	'12345'
);
const andressa = new User('Andressa', 'andressa23@gmail.com', 'Andressa', '12345');

rogerio.follow(andreia);
rogerio.follow(andressa);
console.log('--------------------');
andressa.follow(rogerio);
andressa.follow(andreia);
console.log('--------------------');
andreia.follow(rogerio);
andreia.follow(andressa);

console.log('-----------------');
const tweetRogerio1 = rogerio.sendTweet('Sou muito sortudo!');
const tweetRogerio2 = rogerio.sendTweet('Estou muito cansado hoje');
const tweetRogerio3 = rogerio.sendTweet('Quero uma breja!');
console.log('-----------------');
const tweetAndreia1 = andressa.sendTweet('Sou top pra caramba');
const tweetAndreia2 = andressa.sendTweet('Quero um sanduíche');
const tweetAndreia3 = andressa.sendTweet('Daria a vida por um x-tudo hoje');
console.log('---------------');
const tweetAndressa1 = andressa.sendTweet('Gosto de sair com meus filhos');
const tweetAndressa2 = andressa.sendTweet('gosto de sair para a fazenda');
const tweetAndressa3 = andressa.sendTweet('queria dar uma volta no shopping');

tweetAndreia1.addLike(rogerio);
tweetAndreia2.addLike(rogerio);
tweetAndreia3.addLike(rogerio);

tweetAndressa1.addLike(rogerio);
tweetAndressa2.addLike(rogerio);
tweetAndressa3.addLike(rogerio);

tweetRogerio1.addLike(andressa);
tweetRogerio2.addLike(andressa);
tweetRogerio3.addLike(andressa);

tweetRogerio1.addLike(andreia);
tweetRogerio2.addLike(andreia);
tweetRogerio3.addLike(andreia);

tweetAndreia1.addReply(rogerio, 'Putz, você é diferenciado!');
tweetAndreia1.addReply(andressa, 'Gostamos de você pra caramba');

tweetAndreia1.show();
rogerio.showTweets();