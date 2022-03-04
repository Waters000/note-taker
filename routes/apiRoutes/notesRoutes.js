const router = require('express').Router();
 const { createNewNote, deleteNote } = require('../../lib/notes');
const notes = require("../../db/db.json");

const uuid = require('../../helpers/uuid')


router.get('/notes', (req, res) => {
  console.log('here are the notes', notes)
    res.json(notes);
  });

  module.exports = router;