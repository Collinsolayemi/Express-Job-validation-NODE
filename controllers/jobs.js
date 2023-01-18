const getAllJobs = async (req, res) => {
  res.send("Get all jobs");
};

const getJob = async (req, res) => {
  res.send("Get job");
};

const createJobs = async (req, res) => {
  res.send("Create job");
};

const updateJobs = async (req, res) => {
  res.send("Update job");
};

const deleteJobs = async (req, res) => {
  res.send("Delete job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJobs,
  updateJobs,
  deleteJobs,
};
