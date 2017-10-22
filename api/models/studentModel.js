import mongoose from 'mongoose';

/**
 * Student Schema
 */
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter the student\'s name'
  },
  age: {
    type: Number,
    required: "Please enter the student's age"
  },
  department: {
    type: String,
    required: "Please enter the student's department"
  },
  cgpa: {
    type: Number,
    required: "Please enter the student's cgpa"
  },
  matricNo: {
    type: Number,
    required: "Please enter the student's matric number",
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

// create model and export
export default mongoose.model('Student', StudentSchema);
