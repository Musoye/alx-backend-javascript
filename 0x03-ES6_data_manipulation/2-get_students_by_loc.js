/* eslint-disable*/
export default function getStudentIdsSum(getListStudents) {
  const arr = Array.from(getListStudents);
  return arr.reduce((acc, student) => acc + student.id, 0,);
}
