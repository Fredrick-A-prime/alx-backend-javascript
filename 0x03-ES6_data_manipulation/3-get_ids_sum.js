export default function getStudentIdsSum(students) {
  const initialValue = 0;
  return students.reduce(
    (previousValue, currentValue) => previousValue + currentValue.id,
    initialValue,
  );
}
