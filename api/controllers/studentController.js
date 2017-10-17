/**
 * list_all_students..get
 * create_a_student..post
 * update_a_student_info..update
 * delete_a_student..delete
 */

import mongoose from 'mongoose';

const Student = mongoose.model('Student');

const list_all_students = (req, res) => {
  Student.find({}, (err, student) => {
    if (err)
      res.send(err);
    res.json(student);
  });
};

const create_a_student = (req, res) => {
  const new_student = new Student(req.body);
  new_student.save((err, student) => {
    if (err)
      res.send(err);
    res.json(student);
  });
};

const update_a_student_info = (req, res) => {
  Student.findOneAndUpdate({_id: req.params.studentId}, req.body, {new: true}, (err, student) => {
    if (err)
      res.send(err);
    res.json(student);
  });
};

const delete_a_student = (req, res) => {
  Student.remove({_id: req.params.studentId}, (err, student) => {
    if (err)
      res.send(err);
    res.json({message: 'Student succesfully deleted'});
  });
};

export { list_all_students, create_a_student, update_a_student_info, delete_a_student };

