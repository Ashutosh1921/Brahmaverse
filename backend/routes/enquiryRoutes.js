const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  submitEnquiry,
  getPublicEnquiries,
  claimEnquiry,
  getMyClaimedEnquiries,
} = require("../controllers/enquiryController");

router.post("/submit", submitEnquiry);
router.get("/public", protect, getPublicEnquiries);
router.put("/claim/:id", protect, claimEnquiry);
router.get("/my-claims", protect, getMyClaimedEnquiries);

module.exports = router;
