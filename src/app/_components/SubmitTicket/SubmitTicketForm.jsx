"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormBtn from "../FormBtn";

const SubmitTicketForm = () => {
  const [loading, setLoading] = useState(false);
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const uploadData = async (data) => {
    try {
      const response = await fetch("/api/create-ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create ticket");
      }

      console.log("Ticket Created");

      // Sending ticket should ideally be done after successfully creating the report
      try {
        const ticketResponse = await fetch("/api/send-ticket", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!ticketResponse.ok) {
          throw new Error("Failed to send ticket");
        } else {
          console.log("Ticket Sent Successfully");
        }
      } catch (ticketError) {
        console.error("Error sending ticket:", ticketError);
        // Handle ticket sending error here
        // For simplicity, I'm re-throwing the error here
        throw ticketError;
      }

      try {
        const response = await fetch("/api/send-client-ticket", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Failed send ticket");
        } else {
          console.log("Ticket Sent");
          setLoading(false);
          resetForm();
        }
      } catch (error) {
        console.error("Error uploading data:", error);
        // You can handle the error here or throw it further if needed
        throw error;
      }
    } catch (error) {
      console.error("Error uploading data:", error);
      // You can handle the error here or throw it further if needed
      throw error;
    }
  };

  const generateTicketId = () => {
    const timestamp = Date.now().toString(36); // Convert timestamp to base 36 string
    const randomNumber = Math.floor(Math.random() * 100000000); // Generate random number
    const randomString = randomNumber.toString(36); // Convert random number to base 36 string
    const ticketId = "#" + timestamp + "-" + randomString; // Concatenate with "#" prefix
    return ticketId.slice(0, 9); // Limit to 9 characters
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      setLoading(true);

      const ticket = generateTicketId();

      const data = {
        fullname: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        ticket: ticket,
        type: "ticket",
      };

      try {
        // Send data to  DATABASE

        uploadData(data);

        // toast.success(` Congrats ${form.name}!, Your E-book is Downloading!`);
      } catch (error) {
        // Handle errors that may occur during database or API operations
        alert("An Error occured, please try again " + error.message);

        // Log or display an error message to the user
        console.error(error);
      }
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

export default SubmitTicketForm;
