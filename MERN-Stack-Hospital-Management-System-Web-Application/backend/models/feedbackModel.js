import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
}, { timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default mongoose.model("Feedback", feedbackSchema);