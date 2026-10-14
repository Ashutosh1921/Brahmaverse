const Enquiry = require("../models/Enquiry");

const submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone, courseInterest, message } = req.body;

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      courseInterest,
      message,
    });

    res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPublicEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find({ status: "public" }).sort({
      createdAt: -1,
    });

    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const claimEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    if (enquiry.status === "claimed") {
      return res
        .status(400)
        .json({ message: "This enquiry has already been claimed" });
    }

    enquiry.status = "claimed";
    enquiry.claimedBy = req.employee._id;
    enquiry.claimedAt = new Date();

    await enquiry.save();

    res.json({
      message: "Enquiry claimed successfully",
      enquiry,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyClaimedEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find({
      status: "claimed",
      claimedBy: req.employee._id,
    }).sort({ claimedAt: -1 });

    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  submitEnquiry,
  getPublicEnquiries,
  claimEnquiry,
  getMyClaimedEnquiries,
};
