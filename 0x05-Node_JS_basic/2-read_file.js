const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8')
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = {};
    lines.forEach(line => {
      const fields = line.split(',');
      const field = fields[fields.length - 1].trim();
      if (field in students) {
        students.field.count += 1;
        students[field].names.push(field[0]);
      } else {
          students[field] {count: 1, [fields[0]] };
        }
      }
  }
}
