"use client";
import React, { useState } from "react";
import "./index.css";
import toast from "react-hot-toast";
import PriBtn from "../_components/PriBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import Link from "next/link";
import DownldBtn from "../_components/DownldBtn";

const HvcoPage = () => {
  // FORM STATES
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
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

      // const data = { form, timeStamp };

      const data = {
        formData: {
          name: form.name,
          email: form.email,
        },
        timeStamp,
      };

      try {
        // const uploadToDatabase = async (data) => {
        //   // Add a new document in collection ""

        //   await setDoc(doc(db, "users", data.formData.email), {
        //     name: data.formData.name,
        //     email: data.formData.email,
        //     message: data.formData.message,
        //     number: data.formData.number,
        //     timeStamp: data.timeStamp,
        //   });
        // };
        // await uploadToDatabase(data);

        // Send data to  API
        const postData = async (data) => {
          try {
            const response = await fetch("/api/send", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
              throw new Error("Failed to send data");
            }

            console.log(result.status);
            return result;
          } catch (error) {
            console.error(error);
            // You can handle the error here or throw it further if needed
            throw error;
          }
        };

        const response = await postData(data);
        console.log(response.status);

        setLoading(false);

        if (response.status === "undefined") {
          setIsSubmitted(true);
          toast.success(` Congrats ${form.name}!, Your E-book is Downloading!`);
          resetForm();
        } else {
          // Handle the case when the API call fails

          setIsSubmitted(true);
          toast.success(` Congrats ${form.name}!, Your E-book is Downloading!`);
          resetForm();
        }
      } catch (error) {
        // Handle errors that may occur during database or API operations
        // alert("An Error occured, please try again " + error.message);
        // setLoading(false);
        // resetForm();

        // Log or display an error message to the user
        console.error(error);
      }
    }
  };

  const validateForm = () => {
    const errors = {
      name: form.name === "",
      email: form.email === "",
    };

    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
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
                className={`w-[100%] border-2 ${
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
                className={`w-[100%] border-2 ${
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
            {/* <div>
              <label htmlFor="number" className="text-semibold text-[16px]">
                Phone Number
              </label>
              <div
                className={` ${
                  formErrors.number ? "border-red-600" : "border-stone-300"
                } rounded-[5px] flex flex-row gap-5`}
              >
                <select
                  name=""
                  id=""
                  className="w-[100px] rounded border-2 border-stone-300 p-2"
                >
                  {" "}
                
                </select>
                <input
                  id="phoneNumber"
                  name="number"
                  className="w-full border-2 border-stone-300 p-2 rounded"
                  type="tel"
                  placeholder="phone number"
                  maxLength={12}
                  min={8}
                  value={form.number}
                  onChange={handleChange}
                />
              </div>
              {formErrors.number && (
                <div className="text-red-600 text-[14px] ">
                  Phone Number is required
                </div>
              )}
            </div> */}
            <div className="font-semibold">
              <DownldBtn
                DownldBtnText="Download Now"
                DownldBtnLink={isSubmitted ? "/" : ""}
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
