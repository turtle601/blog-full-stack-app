import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
  publishedDate: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model('POST', PostSchema);

export default Post;
