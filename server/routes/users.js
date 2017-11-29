var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');
var mongoose = require('mongoose')

// below are example's of your basic CRUD functions and wont work
router.route('/blogs') // <host>/api/blogs

  // create a blog (accessed at POST http://localhost:3000/api/blogs)
  .post(function(req, res) {

        var blog = new Blog();      // create a new instance of the Bear model
        blog.title = req.body.title;  // set the bears name (comes from the request)
        blog.body = req.body.body;
        // save the bear and check for errors
        blog.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Blog created!' });
        });

    })
    .get(function(req, res) {
      Blog.find(function(err, blogs) {
          if (err)
              res.send(err);

          res.json(blogs);
      });
  });
  router.route('/blogs/:blog_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
      Blog.findById(req.params.blog_id, function(err, blog) {
        if (err) {
          res.send(err);
        }
        res.json(blog);
      });
    })
    .put(function(req, res) {
      // use our bear model to find the bear we want
        Blog.findById(req.params.blog_id, function(err, blog) {
          if (err) {
              res.send(err);
            }
            blog.title = req.body.title;  // update the blogs info
            blog.body =req.body.body
            // save the bear
            blog.save(function(err) {
              if (err) {
                 res.send(err);
                }
                res.json({ message: 'Blog updated!' });
              });
            });
        })
        .delete(function(req, res) {
          Blog.remove({
              _id: req.params.blog_id
          }, function(err, blog) {
              if (err)
                  res.send(err);

              res.json({ message: 'Blog Successfully deleted' });
          });
      });

module.exports = router;
