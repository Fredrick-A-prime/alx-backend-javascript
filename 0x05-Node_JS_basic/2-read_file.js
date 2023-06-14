const fs = require('node:fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8')

        const students = data.split('\n').filter((line) => line.trim() !== '');
        const studentCount = students.length;
    
        console.log('Number of students:', studentCount);
    } catch (e) {
        throw new Error('Cannot load the database')
    }
}
const path = 'database.csv'

module.exports = countStudents
