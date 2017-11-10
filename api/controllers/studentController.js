import Student from '../models/studentModel';

/**
 * Get all students
 * @param {object} req The request object
 * @param {*} res The response object
 * @returns {Student} all students
 */
const listAllStudents = (req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      res.send(err);
    }
    // res.json(students);
    res.render('allstudents', { title: 'School Management System', students });
  });
};

/**
 * Get a single student with studentId params
 * @param {obj} req
 * @param {obj} res
 * @returns {student} one student
 */
const getAStudent = (req, res) => {
  Student.findById({ _id: req.params.studentId }, (err, student) => {
    if (err) {
      res.send(err.toString());
    }
    // res.json(student);
    res.render('onestudent.pug', { title: 'School Management System', student });
  });
};

// form to add a student
const addStudentForm = (req, res) => {
  res.render('addstudent', {
    title: 'School Management System'
  });
};

/**
 * Create new student
 * @param {object} req
 * @param {object} res
 * @returns {Student} Student object
 */
const createAStudent = (req, res) => {
  const newStudent = new Student(req.body); // create an instance of the Student model
  newStudent.save((err, student) => {
    if (err) {
      res.send(err.toString());
    }
    console.log(student);
    res.redirect('/api/student/add');
    // res.json(student);
  });
};

// form to update a student
const updateStudentForm = (req, res) => {
  Student.findById({ _id: req.params.studentId }, (err, student) => {
    if (err) {
      res.send(err.toString());
    }
    // res.json(student);
    res.render('update_student.pug', { title: 'School Management System', student });
  });
};

// update student controller
const updateAStudentInfo = (req, res) => {
  Student.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, (err, student) => {
    if (err) {
      res.send(err.toString());
    }
    // res.json(student);
    // console.log(student);
    res.redirect(`/api/students/${student._id}`);
  });
};

// controller to delete a student
const deleteAStudent = (req, res) => {
  Student.findByIdAndRemove({ _id: req.params.studentId }, (err, student) => {
    if (err) {
      res.send(err);
    }
    console.log(student);
    // res.json({ message: 'Student succesfully deleted', student });
    res.redirect('/api/students');
  });
};

export { listAllStudents, addStudentForm, updateStudentForm, getAStudent, createAStudent, updateAStudentInfo, deleteAStudent };
