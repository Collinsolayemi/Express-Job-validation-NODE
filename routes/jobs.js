const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJobs,
  updateJobs,
  deleteJobs,
} = require("../controllers/jobs");

router.routes("/").get(getAllJobs, createJobs);
router.routes("/:id").get(getJob).patch(updateJobs).delete(deleteJobs);
