const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
  city: {
    type: Schema.Types.ObjectId,
    ref: 'City'
},
  title: {
    type: String,
    // required: function() { return this.title.length < 201 && this.title.length > 0; },
  },
  photo: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    require: [true, 'Post content is required'],
  },
  postDate: {
    type: Date,
    default: Date.now,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }],
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
