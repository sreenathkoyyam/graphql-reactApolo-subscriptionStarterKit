import { PubSub,withFilter } from 'graphql-subscriptions';
const {players} = require('../../data/playersName');

let nextId = 1;
const insertplayer =  function (root, {input}) {
  // console.log(input)
    const newPlayer = { id: String(nextId++),name: input.name };
    players.push(newPlayer);
    console.log(players)
    return players;
};



module.exports = { insertplayer };