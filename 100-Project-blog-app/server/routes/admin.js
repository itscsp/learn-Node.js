const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/**
 * POST
 * Search
 */

router.get("/admin", async (req, res) => {
  try {
      const locals = {
        title: "Admin",
        description: "Simple Blog created with NodeJs, Express & MongoDB.",
      };
    
    res.render("admin/index", { locals });
  } catch (error) {
    console.log("Error in Home Route");
  }
});


module.exports = router;    