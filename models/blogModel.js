import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 30,
  },
  content: {
    type: String,
    required: true,
    minLength: 30,
  },
  category: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  saved: {
    type: Number,
    default: 0,
  },
  shared: {
    type: Number,
    default: 0,
  },
  like: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  tags: [
    {
      tag: {
        type: String,
      },
    },
  ],
  imageUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.models.blog || mongoose.model("blog", blogSchema);
