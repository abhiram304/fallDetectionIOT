var mysql = require('./mysql');
var moment = require('moment');
exports.saveToDB = function(req, res){
	var accReading = req.param('acc');
	var fallTypes =["front", "back", "right", "left"];
	var randomNumber = Math.floor(Math.random()*fallTypes.length);
	var now = moment();
	var formatted = now.format('YYYY-MM-DD HH:mm:ss Z');
	//console.log(formatted)
	var queryStr = "INSERT INTO `iotdb`.`logs` (acc_reading, fall_type, time_of_fall) VALUES ('"+accReading+"', '"+fallTypes[randomNumber]+"', '"+formatted+"')";
	
	mysql.fetchData(function(err, results) {
		if (err) {
		throw err;
		} else {
		//res.redirect('/saveCardDetails?Userid='+detailsP.Userid);
			res.send("Success");
		}
		}, queryStr);
	
	};