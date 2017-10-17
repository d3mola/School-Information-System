module.exports = function(app) {
  const studentController = require('../controllers/studentController');

  // student routes
  app.route('/api/students')
  .get(studentController.list_all_students)
  .post(studentController.create_a_student)
  //.delete(studentController.delete_a_student)
  //.put(studentController.update_a_student)


  app.route('/api/students/:studentId')
  //.get(studentController.list_a_student)
  .put(studentController.update_a_student_info)
  .delete(studentController.delete_a_student)

};


/**
 * es6 syntax.. have problems with importing and exporting
 * 
import { list_all_students, create_a_student, update_a_student, delete_a_student } from '../controllers/studentController';

const studentController = app => {
  // student routes
  app.route('/api/students')
  .get(list_all_students.list_all_students)
  .post(studentController.create_a_student)
  //.delete(studentController.delete_a_student)
  //.put(studentController.update_a_student)


  app.route('/api/students/:studentId')
  //.get(studentController.list_a_student)
  .put(studentController.update_a_student_info)
  .delete(studentController.delete_a_student)
}


export default studentController;
*/