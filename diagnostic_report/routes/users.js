var express = require('express');
var requestify = require('requestify');
var router = express.Router();
var orders = require('../controllers/order_process');
var genomic_api_call = require('../controllers/call_genomic_api.js');
var clinical_api = require('../controllers/clinical_api.js');
var test_data = require('../controllers/test_data.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log('calling');
	console.log(req.session.access_token);
	clinical_api.create('DiagnosticReport', test_data.report, req.session.clinical_access_token, res);
});

module.exports = router;
