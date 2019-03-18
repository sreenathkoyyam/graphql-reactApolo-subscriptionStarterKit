const {players} = require('../../../data/playersName');
const sortDataArray = require('../../../services/sortArrayService');
module.exports = function (root ,{id}) {
	const response = players.find(players => players.id === id)
	return response;
};
