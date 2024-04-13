"use client";
import React, { useState } from "react";
import "./index.css";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import Link from "next/link";
import DownldBtn from "../_components/DownldBtn";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HvcoPage = () => {
  // FORM STATES
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    number: false,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const handlePhoneChange = (value, data) => {
    setForm({ ...form, number: value });
    setFormErrors({ ...formErrors, number: false });
  };

  const uploadData = async (data) => {
    try {
      const response = await fetch("/api/create-hvco-client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create hvco client");
      }

      console.log("Client Created");

      // Sending ticket should ideally be done after successfully creating the report
      try {
        const hvcoResponse = await fetch("/api/send-hvco", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!hvcoResponse.ok) {
          throw new Error("Failed to send hvco");
        } else {
          console.log("HVCO Sent Successfully");
          setLoading(false);
          resetForm();
          toast.success(`  ${form.name}, Your E-book was sent successfully!`);
        }
      } catch (hvcoError) {
        console.error("Error sending report:", hvcoError);
        // Handle ticket sending error here
        // For simplicity, I'm re-throwing the error here
        throw hvcoError;
      }
    } catch (error) {
      console.error("Error uploading hvco:", error);
      // You can handle the error here or throw it further if needed
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      setLoading(true);

      const data = {
        name: form.name,
        email: form.email,
        number: form.number,
      };

      try {
        uploadData(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateForm = () => {
    const errors = {
      name: form.name === "",
      email: form.email === "",
      number: form.number.length < 7 || form.number.length > 15,
    };

    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      number: "",
    });
  };

  return (
    <div className="form-group   mb-[50px] md:px-20 lg:px-20 px-3 flex flex-col lg:flex-row gap-10  my-[80px] shrink p-20">
      {/* FORM TEXT */}
      <div className="form-text ">
        <div className="form-text-upper flex flex-col gap-6 p-2">
          <h1 className=" text-[2em] lg:text-[3em]">
            Strategies for A Seamless Website Maintenance and Management Mastery{" "}
          </h1>
          <p className=" flex-wrap flex max-w-[455px]">
            Download this free high-value content e-book and immediately see the
            result in your website and master management.
          </p>
        </div>
      </div>
      {/* FORM */}
      <motion.div variants={fadeIn("right", "spring", 0.2, 0.75)}>
        <form
          className="form h-full lg:min-w-[400px] shadow-[0px_4px_24px_rgba(35_,164_,85_,0.05)] bg-white min-w-[300px] rounded-[20px] py-[20px] px-[30px] bg-form "
          onSubmit={handleSubmit}
        >
          <div className="gap-[30px] flex flex-col lg:mt-[30px]">
            {/* NAME */}
            <div>
              <label htmlFor="name" className=" text-[16px]">
                Name
              </label>
              <div
                className={`w-[100%] border ${
                  formErrors.name ? "border-red-600" : "border-stone-300"
                } rounded-[5px] flex flex-row justify-between`}
              >
                <input
                  id="name"
                  name="name"
                  className="w-full p-2 "
                  type="text"
                  value={form.name}
                  placeholder="What's your name?"
                  onChange={handleChange}
                />
              </div>
              {formErrors.name && (
                <div className="text-red-600 text-[14px] ">
                  Name is required
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-semibold text-[16px]">
                Email
              </label>
              <div
                className={`w-[100%] border ${
                  formErrors.email ? "border-red-600" : "border-stone-300"
                } rounded-[5px] flex flex-row justify-between`}
              >
                <input
                  id="email"
                  name="email"
                  className="w-full p-2"
                  type="email"
                  value={form.email}
                  placeholder="Your E-mail Address?"
                  onChange={handleChange}
                />
              </div>
              {formErrors.email && (
                <div className="text-red-600 text-[14px] ">
                  Email is required
                </div>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="number" className="text-semibold text-[16px]">
                Phone Number
              </label>

              <PhoneInput
                country={"ng"}
                value={form.number}
                onChange={handlePhoneChange}
                inputProps={{ required: true }}
                inputStyle={{
                  width: "100%",

                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              />

              {formErrors.number && (
                <div className="text-red-600 text-[14px] ">
                  Please enter a valid phone number
                </div>
              )}
            </div>
            <div className="font-semibold">
              <DownldBtn
                DownldBtnTitle={loading ? "Downloading..." : "Download E-book"}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(HvcoPage, "");
