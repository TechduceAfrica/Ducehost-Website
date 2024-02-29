import mongoose, { Schema, models } from "mongoose";

const submitTicketSchema = new Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
    type: String,
    id: String,
  },
  {
    timestamps: true,
  }
);

const SubmitTicket =
  models.SubmitTicket || mongoose.model("SubmitTicket", submitTicketSchema);

export default SubmitTicket;
