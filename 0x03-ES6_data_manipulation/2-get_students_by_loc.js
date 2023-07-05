/* eslint-disable*/
export default function getStudentsByLocation(getListStudents) {
  return getListStudents.reduce((acc, student) => { acc + student.id, 0 });
}
