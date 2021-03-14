const express = require("express");
const router = express.Router()
const User = require('../models/Users')

router.get('/', async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ success: true, data: user })
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

router.put('/create-event', async (req, res) => {
  const { body } = req
  try {
    const user = await User.findById(body.userId)
    if (!user) {
      res.status(400).json({ success: false });
    }
    await user.events.push({ name: body.name, description: body.description, atendees: body.atendees })
    user.save();
    res.status(201).json({ success: true, data: user })
  } catch (error) {
    res.status(400).json({ success: false });
  }

});

router.post('/create-account', async (req, res) => {
  const { body } = req

  //just needs name, pass and email
  try {
    const user = await User.create(body);
    res.status(201).json({ success: true, data: user })
  } catch (error) {
    res.status(400).json({ success: false });
  }

});

router.get('/:id', async (req, res) => {
  const {
    params: { id }
  } = req

  try {
    const user = await User.findById(id)
    if (!user) {
      return res.status(400).json({ success: false });
    }

    return res.status(200).json({ success: true, data: user });

  } catch (error) {
    return res.status(400).json({ success: false });
  }
});


// THIS DOES NOTHING RIGHT NOW
router.put('/:id', async (req, res) => {
  const {
    params: { id }
  } = req

  try {
    // const user = await User.findByIdAndUpdate(id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    const user = await User.findById(id)
    if (!user) {
      return res.status(400).json({ success: false });
    }

    return res.status(200).json({ success: true, data: user });
  } catch (error) {

    return res.status(400).json({ success: false });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const deletedUser = await User.deleteOne({ _id: id });

    if (!deletedUser) {
      return res.status(400).json({ success: false });
    }
    return res.status(200).json({ success: false, data: {} });

  } catch (error) {
    return res.status(400).json({ success: false });
  }
});




module.exports = router;