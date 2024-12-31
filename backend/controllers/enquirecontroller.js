import Enquire from "../models/enquiremodel.js";

// Create a new enquiry
export const createEnquiry = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    // Create a new enquiry document
    const newEnquiry = new Enquire({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    });

    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// Get all enquiries
export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquire.find();
    res.status(200).json({
      success: true,
      data: enquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// import Enquire from "../models/enquireModel.js";

// // Create a new enquiry
// export const createEnquiry = async (req, res) => {
//   try {
//     const newEnquiry = await Enquire.create(req.body);
//     res
//       .status(201)
//       .json({ message: "Enquiry created successfully", data: newEnquiry });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to create enquiry", error: error.message });
//   }
// };

// // Get all enquiries
// export const getAllEnquiries = async (req, res) => {
//   try {
//     const enquiries = await Enquire.find();
//     res.status(200).json(enquiries);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to retrieve enquiries", error: error.message });
//   }
// };

// // Get a single enquiry by ID
// export const getEnquiryById = async (req, res) => {
//   try {
//     const enquiry = await Enquire.findById(req.params.id);
//     if (!enquiry) {
//       return res.status(404).json({ message: "Enquiry not found" });
//     }
//     res.status(200).json(enquiry);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to retrieve enquiry", error: error.message });
//   }
// };

// // Update an enquiry by ID
// export const updateEnquiryById = async (req, res) => {
//   try {
//     const updatedEnquiry = await Enquire.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedEnquiry) {
//       return res.status(404).json({ message: "Enquiry not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Enquiry updated successfully", data: updatedEnquiry });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to update enquiry", error: error.message });
//   }
// };

// // Delete an enquiry by ID
// export const deleteEnquiryById = async (req, res) => {
//   try {
//     const deletedEnquiry = await Enquire.findByIdAndDelete(req.params.id);
//     if (!deletedEnquiry) {
//       return res.status(404).json({ message: "Enquiry not found" });
//     }
//     res.status(200).json({ message: "Enquiry deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to delete enquiry", error: error.message });
//   }
// };

// finall
// import Enquire from "../models/enquireModel.js";

// // Create a new enquiry
// export const createEnquiry = async (req, res) => {
//    try {
//     const newEnquiry = await Enquire.create(req.body);
//     res
//       .status(201)
//       .json({ message: "Enquiry created successfully", data: newEnquiry });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to create enquiry", error: error.message });
//   }

// };

// // Get all enquiries
// export const getAllEnquiries = async (req, res) => {
//   try {
//     const enquiries = await Enquire.find();
//     res.status(200).json(enquiries);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to retrieve enquiries", error: error.message });
//   }
// };

// // Get a single enquiry by ID
// export const getEnquiryById = async (req, res) => {
//   try {
//     const enquiry = await Enquire.findById(req.params.id);
//     if (!enquiry) {
//       return res.status(404).json({ message: "Enquiry not found" });
//     }
//     res.status(200).json(enquiry);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to retrieve enquiry", error: error.message });
//   }
// };

// // Update an enquiry by ID
// export const updateEnquiryById = async (req, res) => {
//   try {
//     const updatedEnquiry = await Enquire.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedEnquiry) {
//       return res.status(404).json({ message: "Enquiry not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Enquiry updated successfully", data: updatedEnquiry });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to update enquiry", error: error.message });
//   }
// };

// // Delete an enquiry by ID
// export const deleteEnquiryById = async (req, res) => {
//   try {
//     const deletedEnquiry = await Enquire.findByIdAndDelete(req.params.id);
//     if (!deletedEnquiry) {
//       return res.status(404).json({ message: "Enquiry not found" });
//     }
//     res.status(200).json({ message: "Enquiry deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to delete enquiry", error: error.message });
//   }
// };

// import Enquire from "../models/enquiremodel.js";

// // Create a new enquiry
// export const createEnquiry = async (req, res) => {
//   try {
//     const { firstName, lastName, email, phoneNumber, message } = req.body;

//     // Create a new enquiry document
//     const newEnquiry = new Enquire({
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       message,
//     });

//     await newEnquiry.save();

//     res.status(201).json({
//       success: true,
//       message: "Enquiry submitted successfully!",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };

// // Get all enquiries
// export const getAllEnquiries = async (req, res) => {
//   try {
//     const enquiries = await Enquire.find();
//     res.status(200).json({
//       success: true,
//       data: enquiries,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };

// import Enquire from "../models/enquiremodel.js";
// import nodemailer from "nodemailer";

// // Create a new enquiry
// export const createEnquiry = async (req, res) => {
//   try {
//     const { firstName, lastName, email, phoneNumber, message } = req.body;

//     // Create a new enquiry document
//     const newEnquiry = new Enquire({
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       message,
//     });

//     await newEnquiry.save();

//     // Send notification email using Nodemailer
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       logger: true,
//       debug: true, // Include detailed debug logs
//     });

//     const mailOptions = {
//       from: "your-email@gmail.com",
//       to: "atchayapriya3333@gmail.com", // Recipient email
//       subject: "New Enquiry Received",
//       text: `
//         A new enquiry has been submitted:
        
//         Name: ${firstName} ${lastName}
//         Email: ${email}
//         Phone: ${phoneNumber}
//         Message: ${message}
//       `,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error("Error sending email:", error);
//       } else {
//         console.log("Email sent:", info.response);
//       }
//     });

//     res.status(201).json({
//       success: true,
//       message: "Enquiry submitted successfully!",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };

// // Get all enquiries
// export const getAllEnquiries = async (req, res) => {
//   try {
//     const enquiries = await Enquire.find();
//     res.status(200).json({
//       success: true,
//       data: enquiries,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };
