const mongoose = require('mongoose');



const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  atendee_count: {
    type: Number,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Posts", PostSchema);


