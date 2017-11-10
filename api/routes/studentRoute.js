import express from 'express';
import { listAllStudents, addStudentForm, updateStudentForm, getAStudent, createAStudent, updateAStudentInfo, deleteAStudent } from '../controllers/studentController';

const router = express.Router();

// student routes
router
  .get('/students', listAllStudents)
  .post('/students', createAStudent);

router
  .get('/student/add', addStudentForm)
  .get('/student/edit/:studentId', updateStudentForm);

router
  .get('/students/:studentId', getAStudent)
  .put('/students/:studentId', updateAStudentInfo)
  .delete('/students/:studentId', deleteAStudent);

export default router;
