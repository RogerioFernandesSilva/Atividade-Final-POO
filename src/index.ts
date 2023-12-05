import { randomUUID } from "node:crypto";
export const id = randomUUID();
import { Tweet } from "./models/Tweet"

// 1 - Deve ser possível criar usuários na aplicação.
// Os campos ID e Username devem ser únicos por
// usuário, sendo que o ID pode ser gerado
// automaticamente pela aplicação.
import { maria, kadu, lucas } from "./database/User"

// 2 - Deve ser possível criar tweets por usuário. Cada
// usuário poderá criar N tweets e um tweet pertence a
// somente um usuário (relacionamento 0-N).

// O campo ID deve ser único e pode ser gerado
// automaticamente pela aplicação.
// Cada tweet possui um tipo obrigatório (normal ou
// reply).

   const newTweetKadu = kadu.sendTweet("primeiro tweet")
    const newTweetMaria =  maria.sendTweet("segundo tweet")

// 3 - Deve ser possível exibir um tweet na aplicação. Como
// estamos no back-end, utilize o console.log( ).
// A exibição de um tweet deve ser feita da seguinte
// forma:

kadu.showTweets()
console.log("---------------------------------")

// 4 - Deve ser possível para um usuário seguir outro
// usuário, exceto a si mesmo.
// O usuário deve ter acesso a lista de usuário a quem
// segue.

kadu.follow(maria)
kadu.follow(lucas)
maria.follow(kadu)
lucas.follow(kadu)
kadu.follow(kadu) // nao vai parecer na lista
console.log("---------------------------------")
// kadu.showfollowing()

// 5 - Deve ser possível para um usuário curtir os tweets de
// outros usuários.
// Um tweet (normal ou reply) pode ter 0 ou N curtidas.

kadu.likeTweet(newTweetKadu)
maria.likeTweet(newTweetKadu)
maria.likeTweet(newTweetKadu)
console.log("---------------------------------")
// 6 - Deve ser possível para um usuário responder a tweets
// de outros usuários.
// A resposta a um tweet deve ser um novo tweet com o
// tipo “reply”.

newTweetKadu.reply(maria,"reply de tweet teste")
newTweetKadu.reply(maria,"TESTANDO REPLLLLLLLLLLLLLLY")
console.log("---------------------------------")



// 7 - Deve ser possível exibir tweets com a informação de
// seus likes recebidos.

// @<username>: <conteúdo>

// <likes>

// A exibição dos likes varia dependendo da quantidade:
// ● Sem like - não exibir.
// ● 1 like – “@<username> curtiu”.
// ● 2 ou + likes – “@<username1> e mais X
// usuários curtiram”.

kadu.showTweets()
console.log("---------------------------------")
// 8 - Deve ser possível exibir tweets com os seus replies.

// @<username>: <conteúdo>

// <replies>

// Adicione um indicador ao início do reply para indicar
// que se trata de uma resposta (p.ex. o caractere “>”).

// @username: conteúdo do tweet original.
// > @username2: conteúdo do reply 1.
// > @username3: conteúdo do reply 2.
console.log("---------------------------------")
newTweetKadu.showReplies()

// 9 - Um usuário poderá exibir o seu feed de tweets. O feed
// é composto por seus tweets e pelos tweets dos
// usuários a quem segue.
// Na exibição do feed, cada tweet deverá ser exibido
// conforme features anteriores: com seu conteúdo, seus
// likes e replies.
console.log("---------------------------------")

kadu.showFeed()