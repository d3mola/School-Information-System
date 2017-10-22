import express from 'express';
import { listAllStudents, createAStudent, updateAStudentInfo, deleteAStudent } from '../controllers/studentController';

const router = express.Router();

// student routes
router
  .get('/students', listAllStudents)
  .post('/students', createAStudent);
// .delete(deleteAllStudents)


router
  // .get(getAStudent)
  .put('/students/:studentId', updateAStudentInfo)
  .delete('/students/:studentId', deleteAStudent);

export default router;
