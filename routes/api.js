var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/*', function(req, res, next) {
    var reqUrl = req.url.toString();
    var customerAllRegex = new RegExp("/customer", "i");
    var customerSingleRegex = new RegExp("/customer/(\\d+)", "i");
    var customerAddressRegex = new RegExp("/customer/(\\d+)/address", "i");
    if (reqUrl.match(customerAddressRegex)) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('You requested a customer\'s address');
    } else if (reqUrl.match(customerSingleRegex)) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('You requested a single customer');
    } else if (reqUrl.match(customerAllRegex)) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('You requested all customers');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error!');
    }
});

module.exports = router;
