const axios = require('axios')
var authOptions = {
    url: 'https://api.github.com/users/sreenath886/repos', 
    json: true
};
const axiosGithubObject=axios(authOptions)
module.exports = { axiosGithubObject };

