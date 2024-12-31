// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import enquireroutes from "./routes/enquireroutes.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/enquiries", enquireroutes);

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("MongoDB connection error:", error));

// // Start server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import enquireroutes from "./routes/enquireroutes.js";

// dotenv.config();

// const app = express();
// const PORT = 5002;

// // Middleware
// app.use(cors());
// app.use(express.json());

// //routes
// app.use("/api/enquire", enquireroutes);

// // MongoDB Connection
// mongoose
//   .connect("mongodb://localhost:27017/Sidco", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("MongoDB connection error:", error));

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// final
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import enquireroutes from "./routes/enquireroutes.js";

// dotenv.config();

// const app = express();
// const PORT = 5002;

// // Middleware
// app.use(cors());
// app.use(express.json());

// //routes
// app.use("/api/enquire", enquireroutes);

// // MongoDB Connection
// mongoose
//   .connect("mongodb://localhost:27017/Sidco", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("MongoDB connection error:", error));

// //

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

import enquireroutes from "./routes/enquireroutes.js";

dotenv.config();

const app = express();
const PORT = 5002;

// Middleware
app.use(cors());
app.use(express.json());

// nodemailer

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  logger: true, // Enable logging
  debug: true, // Enable debug output
});

// Verify SMTP connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP connection error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/api/enquire", async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = req.body;
    console.log("Received enquiry:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    });

    // Send notification email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "stdatabase7@gmail.com",
      subject: "New Enquiry Received",
      text: `
        A new enquiry has been submitted:
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber}
        Message: ${message}
      `,
    };

    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully!",
    });
  } catch (error) {
    console.error("Error in /api/enquire:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
});

//routes
app.use("/api/enquire", enquireroutes);

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/Sidco", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
