const { Router } = require("express");
const { 
        programs, 
        createProgram, 
        deleteAllPrograms, 
        deleteProgram 
      } = require("../controllers/adminPanelController/programs");

const router = Router();
//Fetch all programs
router.get("/", programs);
//Create a program
router.post("/createprogram", createProgram);
// Delete a program by ID
router.delete("/deleteprogram/:id", deleteProgram);
// Delete all programs
router.delete("/deleteallprograms", deleteAllPrograms);

module.exports = router;