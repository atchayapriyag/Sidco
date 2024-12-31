// finally
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { AiOutlineClose } from "react-icons/ai";

// const Enquire = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();
//   const [showConfirm, setShowConfirm] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5002/api/enquire/submit",
//         data
//       );

//       if (response.status === 201) {
//         toast.success("Enquiry submitted successfully!");
//         reset(); // Reset form fields
//       }
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to send enquiry. Please try again."
//       );
//     }
//   };

//   return (
//     <div className="w-full max-w-[1442px] mx-auto mt-2 mb-8 px-2 lg:px-0">
//       <div className="relative w-full min-h-[300px] lg:w-[1440px] lg:h-[641px] lg:left-0.5">
//         <div className="w-full h-[300px] lg:w-full lg:h-[502px] lg:absolute lg:top-[65px] lg:left-0 relative">
//           <img
//             className="w-full h-full object-cover"
//             alt="Abandoned textile"
//             src="https://ik.imagekit.io/aw0yzgyse/foodservice1.jpg?updatedAt=1727594732193"
//           />
//         </div>
//         <Toaster />
//         <div className="w-full lg:w-[618px] p-6 lg:px-[37px] lg:py-[30px] bg-white rounded-[10px] shadow-[0px_1px_8px_#00000040] flex flex-col items-center lg:absolute lg:top-0 lg:left-[122px]">
//           <div className="flex flex-col w-full sm:w-[480px] md:w-[600px] items-start gap-6 max-w-md mx-auto p-6 bg-white rounded-lg relative">
//             <div className="relative self-stretch mt-[-1.00px] font-semibold text-black text-2xl tracking-[0] leading-[normal] underline  mb-6 flex justify-between items-center">
//               Send Enquiry
//               <AiOutlineClose
//                 className="text-red-500 cursor-pointer"
//                 size={24}
//                 onClick={() => setShowConfirm(true)}
//               />
//             </div>
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="space-y-4 w-full"
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">
//                     First name
//                   </label>
//                   <input
//                     type="text"
//                     {...register("firstName", {
//                       required: "First name is required",
//                     })}
//                     className={`w-full p-2 border rounded-md ${
//                       errors.firstName ? "border-red-500" : "border-gray-300"
//                     }`}
//                     placeholder="First name"
//                   />
//                   {errors.firstName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.firstName.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">
//                     Last name
//                   </label>
//                   <input
//                     type="text"
//                     {...register("lastName", {
//                       required: "Last name is required",
//                     })}
//                     className={`w-full p-2 border rounded-md ${
//                       errors.lastName ? "border-red-500" : "border-gray-300"
//                     }`}
//                     placeholder="Last name"
//                   />
//                   {errors.lastName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.lastName.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                       message: "Invalid email address",
//                     },
//                   })}
//                   className={`w-full p-2 border rounded-md ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter email"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Phone</label>
//                 <input
//                   type="tel"
//                   {...register("phoneNumber", {
//                     required: "Phone number is required",
//                     pattern: {
//                       value: /^\+?[1-9]\d{1,14}$/,
//                       message: "Invalid phone number",
//                     },
//                   })}
//                   className={`w-full p-2 border rounded-md ${
//                     errors.phoneNumber ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter phone number"
//                 />
//                 {errors.phoneNumber && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.phoneNumber.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   {...register("message", { required: "Message is required" })}
//                   rows={4}
//                   className={`w-full p-2 border rounded-md ${
//                     errors.message ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Write your message here..."
//                 />
//                 {errors.message && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.message.message}
//                   </p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
//               >
//                 Submit Enquiry
//               </button>
//             </form>
//           </div>

//           {showConfirm && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md sm:max-w-sm">
//                 <p className="text-lg font-medium mb-4">
//                   Are you sure you want to clear the details?
//                 </p>
//                 <div className="flex justify-end space-x-4">
//                   <button
//                     className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
//                     onClick={() => setShowConfirm(false)}
//                   >
//                     No
//                   </button>
//                   <button
//                     className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                     onClick={() => {
//                       reset();
//                       setShowConfirm(false);
//                     }}
//                   >
//                     Yes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Enquire;

// finally 
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { AiOutlineClose } from "react-icons/ai";

// const Enquire = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5002/api/enquire/submit",
//         data
//       );

//       if (response.status === 201) {
//         toast.success("Enquiry submitted successfully!");
//         reset(); // Reset form fields
//       }
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to send enquiry. Please try again."
//       );
//     }
//   };

  
//   return (
//     <div className="w-full max-w-[1442px] mx-auto mt-2 mb-8 px-2 lg:px-0">
//       <div className="relative w-full min-h-[300px] lg:w-[1440px] lg:h-[641px] lg:left-0.5">
//         <div className="w-full h-[300px] lg:w-full lg:h-[500px] lg:absolute lg:top-[65px] lg:left-0 relative">
//           <img
//             className="w-full h-full object-cover"
//             alt="Abandoned textile"
//             src="https://ik.imagekit.io/aw0yzgyse/InShot_20241220_135748485.jpg?updatedAt=1734683600704"
//           />
//         </div>
//         <Toaster />
//         <div className="w-full lg:w-[513px] p-6 lg:px-[37px] lg:py-[30px] bg-white rounded-[10px] shadow-[0px_1px_8px_#00000040] flex flex-col items-center lg:absolute lg:top-0 lg:left-[122px]">
//           <div className="flex flex-col w-full sm:w-[480px] md:w-[600px] items-start gap-6 max-w-md mx-auto p-6 bg-white rounded-lg relative">
//             <div className="relative self-stretch mt-[-1.00px] font-semibold text-black text-2xl tracking-[0] leading-[normal] underline  mb-6 flex justify-between items-center">
//               Send Enquiry
//               <AiOutlineClose
//                 className="text-red-500 cursor-pointer"
//                 size={24}
//                 onClick={() => reset()} // Directly reset the form fields
//               />
//             </div>
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="space-y-4 w-full"
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">
//                     First name
//                   </label>
//                   <input
//                     type="text"
//                     {...register("firstName", {
//                       required: "First name is required",
//                     })}
//                     className={`w-full p-2 border rounded-md ${
//                       errors.firstName ? "border-red-500" : "border-gray-300"
//                     }`}
//                     placeholder="First name"
//                   />
//                   {errors.firstName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.firstName.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">
//                     Last name
//                   </label>
//                   <input
//                     type="text"
//                     {...register("lastName", {
//                       required: "Last name is required",
//                     })}
//                     className={`w-full p-2 border rounded-md ${
//                       errors.lastName ? "border-red-500" : "border-gray-300"
//                     }`}
//                     placeholder="Last name"
//                   />
//                   {errors.lastName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.lastName.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                       message: "Invalid email address",
//                     },
//                   })}
//                   className={`w-full p-2 border rounded-md ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter email"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Phone</label>
//                 <input
//                   type="tel"
//                   {...register("phoneNumber", {
//                     required: "Phone number is required",
//                     pattern: {
//                       value: /^\+?[1-9]\d{1,14}$/,
//                       message: "Invalid phone number",
//                     },
//                   })}
//                   className={`w-full p-2 border rounded-md ${
//                     errors.phoneNumber ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter phone number"
//                 />
//                 {errors.phoneNumber && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.phoneNumber.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   {...register("message", { required: "Message is required" })}
//                   rows={4}
//                   className={`w-full p-2 border rounded-md ${
//                     errors.message ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Write your message here..."
//                 />
//                 {errors.message && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.message.message}
//                   </p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
//               >
//                 Submit Enquiry
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Enquire;


import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import  { useState } from "react";


const Enquire = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("Form data:", data);
    try {
      const response = await axios.post(
        "http://localhost:5002/api/enquire",
        data
      );
      console.log("Server response:", response);
      if (response.status === 201) {
        toast.success("Enquiry submitted successfully!");
        reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to send enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="w-full max-w-[1442px] mx-auto mt-2 mb-8 px-2 lg:px-0">
      <div className="relative w-full min-h-[300px] lg:w-[1440px] lg:h-[641px] lg:left-0.5">
        <div className="w-full h-[300px] lg:w-full lg:h-[500px] lg:absolute lg:top-[65px] lg:left-0 relative">
          <img
            className="w-full h-full object-cover"
            alt="Abandoned textile"
            src="https://ik.imagekit.io/aw0yzgyse/InShot_20241220_135748485.jpg?updatedAt=1734683600704"
          />
        </div>
        <Toaster />
        <div className="w-full lg:w-[513px] p-6 lg:px-[37px] lg:py-[30px] bg-white rounded-[10px] shadow-[0px_1px_8px_#00000040] flex flex-col items-center lg:absolute lg:top-0 lg:left-[122px]">
          <div className="flex flex-col w-full sm:w-[480px] md:w-[600px] items-start gap-6 max-w-md mx-auto p-6 bg-white rounded-lg relative">
            <div className="relative self-stretch mt-[-1.00px] font-semibold text-black text-2xl tracking-[0] leading-[normal] underline  mb-6 flex justify-between items-center">
              Send Enquiry
              <AiOutlineClose
                className="text-red-500 cursor-pointer"
                size={24}
                onClick={() => reset()} // Directly reset the form fields
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 w-full"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className={`w-full p-2 border rounded-md ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="First name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className={`w-full p-2 border rounded-md ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full p-2 border rounded-md ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[1-9]\d{1,14}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className={`w-full p-2 border rounded-md ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Phone number"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className={`w-full p-2 border rounded-md ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquire;
