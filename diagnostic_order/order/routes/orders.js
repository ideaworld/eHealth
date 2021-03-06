var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json(get_lab_orders());
});

module.exports = router;

var data = [
{'name': 'Test1', 'Order': 'Bowen', 'Time': '2015-11-11', 'Status': 'Requested'},
{'name': 'Test2', 'Order': 'Bowen', 'Time': '2015-11-11', 'Status': 'Received'},
{'name': 'Test3', 'Order': 'Bowen', 'Time': '2015-11-11', 'Status': 'Accepted'},
{'name': 'Test4', 'Order': 'Bowen', 'Time': '2015-11-11', 'Status': 'Rejected'},
{'name': 'Test5', 'Order': 'Bowen', 'Time': '2015-11-11', 'Status': 'Failed'},
{'name': 'Test6', 'Order': 'Bowen', 'Time': '2015-11-11', 'Status': 'In-progress'},
{'name': 'Test7', 'Order': 'Bowen', 'Time': '2015-11-11', 'Status': 'Review'},
{'name': 'Test8', 'Order': 'Bowen', 'Time': '2015-11-11', 'Status': 'Completed'},
{'name': 'Test9', 'Order': 'Bowen', 'Time': '2015-11-11', 'Status': 'Cancelled'},
{'name': 'Test10', 'Order': 'Bowen', 'Time': '2015-11-11', 'Status': 'Suspended'},

]

function get_lab_orders(){
	return data;
}
