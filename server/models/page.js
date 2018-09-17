var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var PageSchema = new Schema({
    // status: ['edit', 'live', 'hidden'] // live can be the old version edit should always be a sligtly older version it could be done with 'tags as well'
    title: String,
    article: {
        type: Array,
        sections: {
            type: { enum: ['paragraph', 'paragraph w text left','paragraph w text right']},
            src:String,
            text: String
        }
    }
});
var Page = mongoose.model('Page', PageSchema);

/**
 * [
    {
        "_id": "5b9fb18e739a5416088e2f03",
        "title": "some title",
        "__v": 0,
        "article": [ // epandable
            "{sections: ['paragraph'], needs to be a option
            src:'',text: 'insert profound text here!'}"
        ]
    }
]
 */

// make this available to our users in our Node applications
module.exports = Page;