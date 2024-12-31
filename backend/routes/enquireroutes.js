// import express from "express";
// import {
//   getAllEnquiries,
//   getEnquiry,
//   createEnquiry,
//   updateEnquiry,
//   deleteEnquiry,
// } from "../controllers/enquirecontroller.js";

// const router = express.Router();

// router.get("/Enquiries", getAllEnquiries);
// router.get("/Enquiry:id", getEnquiry);
// router.post("/Enquiry", createEnquiry);
// router.put("/Enquiry:id", updateEnquiry);
// router.delete("/Enquiry:id", deleteEnquiry);

// export default router;

// import express from "express";
// import {
//   createEnquire 
//   getAllEnquire,
// } from "../controllers/enquirecontroller.js";

// const router = express.Router();

// router.post("/submit", createEnquire);
// router.get("/all", getAllEnquire);

// export default router;

// import express from "express";
// import {
//   createEnquiry,
//   getAllEnquiries,
//   getEnquiryById,
//   updateEnquiryById,
//   deleteEnquiryById,
// } from "../controllers/enquireController.js";

// const router = express.Router();

// router.post("/submit", createEnquiry);
// router.get("/", getAllEnquiries);
// router.get("/:id", getEnquiryById);
// router.put("/:id", updateEnquiryById);
// router.delete("/:id", deleteEnquiryById);

// export default router;


import express  from "express";
const router = express.Router();
import {
  createEnquiry,
  getAllEnquiries,
}  from "../controllers/enquirecontroller.js";

// POST route to submit a new enquiry
router.post("/submit", createEnquiry);

// GET route to fetch all enquiries
router.get("/all", getAllEnquiries);

export default router;
