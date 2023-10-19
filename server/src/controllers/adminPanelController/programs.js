const Program = require("../../database/schemas/Program");

// Function for retrieving all programs
const programs = async (req, res) => {
  try {
    // Fetch all users from the database
    const allPrograms = await Program.findAll();
    res.json(allPrograms);
    console.log("All (Backend) Programs: ", allPrograms);
  } catch (error) {
    res.status(500).json({ error: "Error fetching programs" });
  }
};

const createProgram = async (req, res) => {
  try {
    const { name, description } = req.body.program;
    const newProgram = await Program.create({ name, description });
    res.json({ program: newProgram });
    console.log("Newly created program: ", newProgram);
  } catch (error) {
    res.status(500).json({ error: "Error creating program" });
  }
};

// Destructive actions below will be removed in production.  Production will have a soft delete and functionality 
// to restore soft-deleted programs.  These will have to be handled accordingly in the routes directory.
const deleteProgram = async (req, res) => {
  try {
    const programId = req.params.id;
    const deletedProgram = await Program.destroy({ where: { id: programId } });
    if (deletedProgram === 0) {
      return res.status(404).json({ error: "Program not found" });
    }
    res.json({ message: "Program deleted successfully" });
    console.log("Deleted program ID: ", programId);
  } catch (error) {
    res.status(500).json({ error: "Error deleting program" });
  }
};

const deleteAllPrograms = async (req, res) => {
  try {
    const deletedPrograms = await Program.destroy({ where: {} });
    res.json({ message: "All programs deleted successfully" });
    console.log("Deleted programs count: ", deletedPrograms);
  } catch (error) {
    res.status(500).json({ error: "Error deleting programs" });
  }
};


module.exports = {
  programs,
  createProgram,
  deleteProgram,
  deleteAllPrograms,
};