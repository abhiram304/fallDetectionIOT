
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var patient = require('./routes/patient');
var dbPointer = require('./routes/db');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}



app.get('/sendAnamoly', user.getAnamoly);
app.get('/', routes.index);
app.get('/dashboard', user.getDashboard);
app.get('/users', user.list);
app.get('/analyze', user.receiveData);
app.get('/userProfile', user.getUserProfile);
app.get('/reports', user.getReports);
app.get('/addPatient', user.getAddPatient);
app.get('/dashboardPatient', patient.getDashboard);
app.get('/patientLog', patient.getPatientLog);
app.get('/emergencyContact', patient.getEmergencyContact);
app.get('/patientSettings', patient.getPatientSettings);
app.get('/appointments', user.getAppointments);
app.get('/sendToDB', dbPointer.saveToDB);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
