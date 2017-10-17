import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var StudentSchema = new Schema({
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
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
  },
});

const Student = mongoose.model('Student', StudentSchema);

export default Student;
