import mongoose, { Schema, models } from "mongoose";

const reportAbuseSchema = new Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
    ticket: String,
  },
  {
    timestamps: true,
  }
);

const ReportAbuse =
  models.ReportAbuse || mongoose.model("ReportAbuse", reportAbuseSchema);

export default ReportAbuse;
