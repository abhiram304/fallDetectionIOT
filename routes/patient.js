exports.getDashboard = function(req, res){
		//var data= req.param("value");  
		res.render('patientDash');
		};
		
		
		exports.getPatientLog = function(req, res){
			//var data= req.param("value");  
			res.render('patientLog');
			};
			
			
			
			exports.getEmergencyContact = function(req, res){
				//var data= req.param("value");  
				res.render('emergency');
				};
				
				
				exports.getPatientSettings = function(req, res){
					//var data= req.param("value");  
					res.render('settings');
					};