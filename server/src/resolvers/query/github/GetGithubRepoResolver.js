const {axiosGithubObject} = require('../../../data/connector/github/gitconnector')
const sortDataArray = require('../../../services/sortArrayService');

const repoData = axiosGithubObject.then(function(response){
if(response.status ==200)
{
   const data = [];
     response.data.forEach(d => {
		data.push({
			id: d.id,
			name: d.name
		});
   });
   return sortDataArray(data, 'name');  // sort Data array by name
}
   
  });  

  console.log(repoData); 
module.exports = function () {return repoData};
