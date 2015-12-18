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
    var randNumber = function() {
        var min = 1;
        var max = 100;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    }
    
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    
    var error = [
        { Key: 'firstname', Value: ['Your first name is no good'] },
        { Key: 'lastname', Value: ['Last name is no good'] },
        { Key: 'email', Value: ['Email is invalid'] },
    ];
    
    // Randomly choose which errors to keep
    for (var i = 0; i < error.length; i++) {
        var rand = randNumber();
        if (rand > 50) {
            error.slice(i, 1);
        }
    }
    
    if (error.length > 0) {
        var errorStr = JSON.stringify(error);
        res.writeHead(400, 'validationException', { 'content-type': 'text/plain' });
        res.end(errorStr);
    } else {
        res.end();
    }
});

module.exports = router;
