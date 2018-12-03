/**
 * Page model for CRUD operations on 
 * Page collection of documents
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PageSchema   = new Schema({
    id: Number,
    name: String,
    user_id: Number,
    page_content: String
});

module.exports = mongoose.model('Page', PageSchema);