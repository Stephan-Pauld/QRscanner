const express = require("express");

const router = express.Router()
const Post = require('../models/Posts')


router.get('/', (req, res) => {
  Post.find()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err);
    })
});


router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    atendee_count: req.body.atendee_count,
    organizer: req.body.organizer,
    company: req.body.company,
  })
  post.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ message: err })
    })
});


router.get('/:eventId', (req, res) => {
  Post.findById(req.params.eventId)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err);
    })
});

router.delete('/:eventId', (req, res) => {
  Post.remove({_id: req.params.eventId})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err);
    })
});


module.exports = router;