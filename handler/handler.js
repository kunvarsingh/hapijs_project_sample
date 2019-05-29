const _service = require('../services/index');


var sayWelcome = function(req,res){
   	return {message:_service.message()}
}


var getUserById = (req,res)=>{
	return {data : _service.getUserById(1)}
}

module.exports={
	sayWelcome : sayWelcome,
	getUserById : getUserById
}