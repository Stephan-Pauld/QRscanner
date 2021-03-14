const express = require("express");
const router = express.Router()
const User = require('../models/Users')


router.get('/:id', async (req, res) => {
  const { params: { id } } = req
  try {
    const user = await User.find({ "events._id": `${id}` })
    if (!user) {
      return res.status(400).json({ success: false });
    }

    const events = user[0].events;

    for (const event of events) {
      if (event._id.toString() === id) {
        return res.status(200).json({ success: true, data: event });
      }
    }

  } catch (error) {

    return res.status(400).json({ success: false });
  }
});


router.put('/:id', async (req, res) => {
  const { body, params: { id }
  } = req
  try {
    const user = await User.find({ "events._id": `${id}` })

    if (!user) {
      return res.status(400).json({ success: false });
    }


    //specific user
    const query = { _id: user[0]._id }
    user[0].events.map(async (event) => {

      // Here we are looping through all events to find the ID of the person registering
      // and we disallow the registration IF that idential email already exisits
      if (event.id === id) {
        if (event.atendees.includes(body.email.toLowerCase())) {
          return res.status(400).json({ Duplicate: 'Email Already Exists' });
        } else {

          // saying we want to add body.email to events.atendees
          const updateDocument = {
            $push: { "events.$[email].atendees": body.email.toLowerCase() }
          };

          // we only want to add it to the specific event ID
          const options = {
            arrayFilters: [
              {
                "email._id": id,
              },
            ],
          };

          const result = await User.updateOne(query, updateDocument, options);
          res.status(201).json({ success: true });

        }
      }
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }
});


module.exports = router;