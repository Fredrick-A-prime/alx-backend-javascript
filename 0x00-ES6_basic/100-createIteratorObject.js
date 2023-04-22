export default function createIteratorObject(report) {
<<<<<<< HEAD
    
}
=======
  let allEmployees = [];
  for (const item of Object.values(report.allEmployees)) {
    allEmployees = [
      ...allEmployees,
      ...item,
    ];
  }
  return allEmployees;
}
>>>>>>> 5594a5893d1ef016525c13d98fbe3a3c761418d1
