var express = require('express');
var router = express.Router();
var Page = require('../models/page');
var exists = false
/* GET home page. */
router.get('/', function(req, res) {
  res.send('server responds with a resource');
});

/**
 * get single page
 */
router.get('/page', function(req, res) {
    Page.find(function(err,Pages) {
        if (err) {
            console.log(err)
        }
        res.send(Pages)
    })
})
/**
 * new page
 */
router.put('/page', function (req, res) {
    // checks if channel already exists
    check()
    setTimeout(() => {
        updateCreateGet()
    }, 200);
    function check() { // sets exists to true if it exists
        Page.find({ title: req.body.title }, function (err, doc) {
            if (doc.length == 0) {
                exists = false
                return exists
                //res.send(doc)
            } else if (doc[0].title === req.body.title) {
                exists = true
                return exists
            }

        })
    }
    // if it exists it will update
    function updateCreateGet() {

        if (exists) {
            Page.findOneAndUpdate({ title: req.body.title }, req.body, function (err, doc) {
                if (err) {
                    console.log(err)
                }
                res.json({ message: 'channel updated' });
            })
            // if it doesn't it wil create
        } else if (!exists) {
            Page.create(req.body, function (err, doc) {
                if (err) {
                    res.send(err)
                }
                res.json({ message: 'channel created' });
            })
        }
    }
})
module.exports = router;
