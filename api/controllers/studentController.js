/**
 * list_all_students..get
 * create_a_student..post
 * update_a_student_info..update
 * delete_a_student..delete
 */

import mongoose from 'mongoose';

const Student = mongoose.model('Student');

const listAllStudents = (req, res) => {
  Student.find({}, (err, student) => {
    if (err) {
      res.send(err);
    }
    res.json(student);
  });
};

const createAStudent = (req, res) => {
  const newStudent = new Student(req.body);
  newStudent.save((err, student) => {
    if (err) {
      res.send(err);
    }
    res.json(student);
  });
};

const updateAStudentInfo = (req, res) => {
  Student.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, (err, student) => {
    if (err) {
      res.send(err);
    }
    res.json(student);
  });
};

const deleteAStudent = (req, res) => {
  Student.remove({ _id: req.params.studentId }, (err, student) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: 'Student succesfully deleted',
      student
    });
  });
};

export { listAllStudents, createAStudent, updateAStudentInfo, deleteAStudent };

