var express = require('express');
var router = express.Router();

/* GET customer listing. */
router.get('/customer', function (req, res, next) {
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

router.post('/user', function (req, res, next) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    res.writeHead(400, 'validationException', { 'content-type': 'text/plain' });
    res.json({
        firstname: 'Your first name is no good',
        lastname: 'Last name is no good.',
        email: 'Email is invalid'
    });
    res.end('Error!');
});

module.exports = router;
