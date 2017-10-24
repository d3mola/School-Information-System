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
    res.json(students);
  });
};

const getAStudent = (req, res) => {
  Student.findById({ _id: req.params.studentId }, (err, student) => {
    if (err) {
      res.send(err.toString());
    }
    res.json(student);
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

export { listAllStudents, getAStudent, createAStudent, updateAStudentInfo, deleteAStudent };
