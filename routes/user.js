
/*
 * GET users listing.
 */
var mysql = require('./mysql');
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

exports.getAnamoly = function(req, res){
			var start= req.param("start");
			var end= req.param("end");
			console.log("Start :" +start+" End: "+end);
			res.send("Success start: "+ start);
			};
			exports.getUserProfile = function(req, res){
				//var data= req.param("value");  
				res.render('user');
				};
				
				
				exports.getReports = function(req, res){
					//var data= req.param("value");  
					res.render('report');
					};
					
					
					exports.getAddPatient = function(req, res){
						//var data= req.param("value");  
						res.render('addpatient');
						};
						
						
						exports.getAppointments = function(req, res){
							//var data= req.param("value");  
							res.render('appointments.ejs');
							};
							
							
							
							
							
							exports.getFallLogs = function(req, res){
								//var data= req.param("value");  
								var queryStr = "SELECT * FROM `iotdb`.`logs` ";
								
								mysql.fetchData(function(err, results) {
								
									console.log(JSON.stringify(results));
									if (err) {
									throw err;
									} else {
									//res.redirect('/saveCardDetails?Userid='+detailsP.Userid);
										res.render('fallLogs',{"results":results});
									}
									}, queryStr);
								
								
							
								};
		