const router = require('express').Router();
 const { newNote, deleteNote, readFile } = require('../../lib/notes');
//const { renderActiveNote } = require('../../public/assets/js/index')
 const notes = require("../../db/db.json");

const uuid = require('../../helpers/uuid')


router.get('/notes', (req, res) => {
  console.log('here are the notes', notes)
    res.json(notes);
  });

router.post('/notes', (req, res) => {
  req.body.id = uuid();

  /// adds id to the newNote on line 71 of public/index.js
  const note = newNote(req.body, notes);
  res.json(note)
})



// Delete a note by id
router.delete("/notes/:id", (req, res) => {

  deleteNote(req.params.id, notes);
  notes = (newArray)
  res.json(newArray)
});
  
  




  // // TODO: Add a comment describing why we would check to see if the following properties exist before entering the code block
  // if (title, text, id) {
  //   // Variable for the object we will save
  //   const newReview = {
  //     title, 
  //     text, 
  //     id
  //   };

  //   const response = {
  //     status: 'success',
  //     body: newReview,
  //   };

  //   console.log(response);

  //   // TODO: Add a comment explaining the functionality of res.json()

  //   res.json(response);
  // } else {
  //   // TODO: Add a comment describing the purpose of the else statement in this POST request.
  //   res.json('Error in posting review');
  // }







  module.exports = router;