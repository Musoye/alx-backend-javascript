/* eslint-disable*/
export default function getStudentsByLocation(getListStudents) {
  const arr = Array.from(getListStudents);
  return arr.reduce((acc, student) => { acc + student.id, 0 });
}
