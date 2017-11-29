/**
 * example of a very basic model with functions for retrival of documents from your db
 */
// grab packageswe need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var blogSchema = new Schema({
  title: String,
  body: String
});
var Blog = mongoose.model('Blog', blogSchema);

// methods
function getAll() {
  Blog.find()
}
function getOne(err, id) {
if(err){throw err}
  Blog.find(id)
}
function findAndDelete(err, id) {
getOne(id).delete()
}
function findAndUpdate(err, id) {

}


// make this available to our users in our Node applications
module.exports = Blog;
