
/*
 * GET home page.
 */
//var mysql = require('./mysql');
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*var queryStr = "INSERT INTO User(userid, username, password, useruid, primarytenant, age, gender, contact, emergencyc, status, token) VALUES('" + detailsP.Userid + "', '"
+ detailsP.UserName + "', '" + detailsP.Password + "', '"
+ sIDLowerCase + "', '" + detailsP.PrimaryTenant + "', '"
+ detailsP.Age + "', '" + detailsP.Gender + "', '"
+ Number(detailsP.Contact) + "', '" + Number(detailsP.Emergencyc)
+ "', 'inactive', '"+sIDLowerCase0+"')";

mysql.fetchData(function(err, results) {
if (err) {
throw err;
} else {
res.redirect('/saveCardDetails?Userid='+detailsP.Userid);
res.render('saveCardDetails', {
	email : detailsP.Userid
});
}
}, queryStr);*/