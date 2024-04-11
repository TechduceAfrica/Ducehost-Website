import React from "react";

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "600px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const bannerStyle = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  borderRadius: "10px 10px 0 0",
};

const textStyle = {
  fontSize: "18px",
  lineHeight: "1.5",
  color: "#333",
  maxWidth: "600px",
};

const buttonStyle = {
  backgroundColor: "#3498db",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "20px 0",
};

export const SupportEmailTemplate = ({
  fullname,
  email,
  subject,
  message,
  ticket,
}) => (
  <div style={containerStyle}>
    <img
      src="https://assets-social-brand-managers.netlify.app/D2.webp"
      alt="SBM Banner"
      style={bannerStyle}
    />
    <h1 style={textStyle}>
      <strong>{fullname}</strong> left a message
    </h1>
    <h1 style={textStyle}>
      <strong>{subject}</strong>
    </h1>
    <p style={textStyle}>
      these are the details: <br />
      <strong>Full Name:</strong> {fullname} <br />
      <strong>Message:</strong> {message} <br />
      <strong>Email Address:</strong> {email} <br />
      <strong>Ticket:</strong> {ticket} <br />
    </p>
  </div>
);

export const ReportEmailTemplate = ({
  fullname,
  email,
  message,
  subject,
  ticket,
}) => (
  <div style={containerStyle}>
    <img
      src="https://assets-social-brand-managers.netlify.app/D1.webp"
      alt="SBM Banner"
      style={bannerStyle}
    />
    <h1 style={textStyle}>
      <strong>{fullname}</strong> left a message
    </h1>

    <h1 style={textStyle}>
      <strong>{subject}</strong>
    </h1>
    <p style={textStyle}>
      These are the details: <br />
      <strong>Full Name:</strong> {fullname} <br />
      <strong>Message:</strong> {message} <br />
      <strong>Email Address:</strong> {email} <br />
      <strong>Ticket:</strong> {ticket} <br />
    </p>
  </div>
);

export const ClientEmailTemplate = ({
  fullname,
  email,
  subject,
  message,
  type,
  ticket,
}) => (
  <div style={containerStyle}>
    <img
      src="https://assets-social-brand-managers.netlify.app/D2.webp"
      alt="SBM Banner"
      style={bannerStyle}
    />
    <h1 style={textStyle}>
      Hi <strong>{fullname}</strong>, your message was sent successfully, please
      wait for response from our CRM Team.
    </h1>
    <br />
    <h1 style={textStyle}>
      <strong>{subject}</strong>
    </h1>
    <p style={textStyle}>
      For reference purposes, take note of your ticket ID which will be used
      when you want to find this {type}. Here are your details: <br />
      <strong>Full Name:</strong> {fullname} <br />
      <strong>Message:</strong> {message} <br />
      <strong>Email Address:</strong> {email} <br />
      <strong>Ticket:</strong> {ticket} <br />
    </p>
  </div>
);

export const HvcoClientEmailTemplate = ({ name }) => (
  <div style={containerStyle}>
    <img
      src="https://assets-social-brand-managers.netlify.app/D2.webp"
      alt="SBM Banner"
      style={bannerStyle}
    />
    <h1 style={textStyle}>
      Hi <strong>{name}</strong>,Thank you for your interest in our high value
      content. <br /> Click this button to download your e-book.
    </h1>
    <br />

    <a
      href="https://drive.google.com/file/d/1VMWu4nidFuRCUKdVW_7odIMmma4pVAGO/view?usp=drive_link"
      style={buttonStyle}
    >
      Download E-book
    </a>
  </div>
);
