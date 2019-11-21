const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  name: {
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
    select: false,
  },
  photo: {
    type: String,
    default: "https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg"
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
