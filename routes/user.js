
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.receiveData = function(req, res){
	var data= req.param("value");  
	res.send("data: "+data+" is stored to the server." );
	};
	
	
	
	exports.getDashboard = function(req, res){
		//var data= req.param("value");  
		res.render('dashboard');
		};