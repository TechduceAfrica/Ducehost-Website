"use client";
import React, { useState } from "react";

import FormBtn from "../FormBtn";

const ReportAbuseForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    id: "report",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      setLoading(true);
      const date = new Date();
      const timeStamp = date;

      const data = {
        formData: {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          id: form.id,
        },
        timeStamp,
      };

      console.log(data);

      // try {
      //   // const uploadToDatabase = async (data) => {
      //   //   // Add a new document in collection ""

      //   //   await setDoc(doc(db, "users", data.formData.email), {
      //   //     name: data.formData.name,
      //   //     email: data.formData.email,
      //   //     message: data.formData.message,
      //   //     subject: data.formData.subject,
      //   //     timeStamp: data.timeStamp,
      //   //   });
      //   // };
      //   // await uploadToDatabase(data);

      //   // Send data to  API
      //   const postData = async (data) => {
      //     try {
      //       const response = await fetch("/api/send", {
      //         method: "POST",
      //         headers: {
      //           "Content-Type": "application/json",
      //           Accept: "application/json",
      //         },
      //         body: JSON.stringify(data),
      //       });

      //       const result = await response.json();

      //       if (!response.ok) {
      //         throw new Error("Failed to send data");
      //       }

      //       console.log(result.status);
      //       return result;
      //     } catch (error) {
      //       console.error(error);
      //       // You can handle the error here or throw it further if needed
      //       throw error;
      //     }
      //   };

      //   const response = await postData(data);
      //   console.log(response.status);

      //   setLoading(false);

      //   if (response.status === "undefined") {
      //     setIsSubmitted(true);
      //     toast.success(` Congrats ${form.name}!, Your E-book is Downloading!`);
      //     resetForm();
      //   } else {
      //     // Handle the case when the API call fails

      //     setIsSubmitted(true);
      //     toast.success(` Congrats ${form.name}!, Your E-book is Downloading!`);
      //     resetForm();
      //   }
      // } catch (error) {
      //   // Handle errors that may occur during database or API operations
      //   // alert("An Error occured, please try again " + error.message);
      //   // setLoading(false);
      //   // resetForm();

      //   // Log or display an error message to the user
      //   console.error(error);
      // }
    }
  };

  const validateForm = () => {
    const errors = {
      name: form.name === "",
      email: form.email === "",
      subject: form.subject === "",
      message: form.message === "",
    };

    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      message: "",
      subject: "",
    });
  };
  return (
    <section>
      {" "}
      <form className="form text-left py-[20px]" onSubmit={handleSubmit}>
        <div className="gap-[30px] flex flex-col">
          {/* NAME */}
          <div>
            <label htmlFor="name" className="text-semibold text-[16px]">
              Name
            </label>
            <div
              className={`w-[100%] border-2 ${
                formErrors.name ? "border-red-600" : "border-primary-blue"
              } rounded-[5px] flex flex-row justify-between`}
            >
              <input
                id="name"
                name="name"
                className="w-full py-3 px-2"
                type="text"
                value={form.name}
                placeholder="What's your name?"
                onChange={handleChange}
              />
            </div>
            {formErrors.name && (
              <div className="text-red-600 text-[14px] ">Name is required</div>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-semibold text-[16px]">
              Email
            </label>
            <div
              className={`w-[100%] border-2 ${
                formErrors.email ? "border-red-600" : "border-primary-blue"
              } rounded-[5px] flex flex-row justify-between`}
            >
              <input
                id="email"
                name="email"
                className="w-full py-3 px-2"
                type="email"
                value={form.email}
                placeholder="Your E-mail Address?"
                onChange={handleChange}
              />
            </div>
            {formErrors.email && (
              <div className="text-red-600 text-[14px] ">Email is required</div>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="text-semibold text-[16px]">
              Subject
            </label>
            <div
              className={`w-[100%] border-2 ${
                formErrors.subject ? "border-red-600" : "border-primary-blue"
              } rounded-[5px] flex flex-row justify-between`}
            >
              <input
                id="subject"
                name="subject"
                className="w-full py-3 px-2"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            {formErrors.subject && (
              <div className="text-red-600 text-[14px] ">
                Subject is required
              </div>
            )}
          </div>

          {/* MESSAGES */}
          <div>
            <label htmlFor="message" className="text-semibold text-[16px]">
              Message
            </label>
            <div
              className={`w-[100%] border-2 ${
                formErrors.message ? "border-red-600" : "border-primary-blue"
              } rounded-[5px] flex flex-row justify-between`}
            >
              <textarea
                id="message"
                name="message"
                className="w-full py-3 px-2"
                rows={3}
                value={form.message}
                placeholder="How can we help you?"
                onChange={handleChange}
              />
            </div>
            {formErrors.message && (
              <div className="text-red-600 text-[14px] ">
                Message is required
              </div>
            )}
          </div>
          <div className="font-semibold">
            <FormBtn FormBtnText={loading ? "Submitting..." : "Submit"} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ReportAbuseForm;