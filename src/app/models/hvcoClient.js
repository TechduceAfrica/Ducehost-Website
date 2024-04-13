import mongoose, { Schema, models } from "mongoose";

const hvcoClientSchema = new Schema(
  {
    name: String,
    email: String,
    number: String,
  },
  {
    timestamps: true,
  }
);

const HvcoClient =
  models.HvcoClient || mongoose.model("HvcoClient", hvcoClientSchema);

export default HvcoClient;
