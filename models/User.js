const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
  currentCity: {
    type: String,
  },
  posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
  }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
