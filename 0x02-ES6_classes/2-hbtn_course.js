export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid input');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Invalid input type');
    }
    return this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('Invalid input type');
    }
    return this._students = value;
  }
}
