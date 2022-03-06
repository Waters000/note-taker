const fs = require('fs');
const path = require('path');





// This function will create a new note
function newNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}

// This function will delete a note
function deleteNote(id, notesArray) {
console.log("Notes arraay " + notesArray)
 const newArray = notesArray.filter(note => note.id !== id)
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(newArray, null, 2)
  );
  console.log("this is new array of notes " + newArray)
  return newArray;
}

function readFile() {

  fs.readFile(
    path.join(__dirname, "../db/db.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    }

  );
}






module.exports = { newNote, deleteNote, readFile }