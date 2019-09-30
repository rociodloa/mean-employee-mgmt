export class Employee {

    constructor(_id = '', name = '', lastname = '', position = '', office = '', salary = 0) {
      this._id = _id;
      this.name = name;
      this.lastname = lastname;
      this.position = position;
      this.office = office;
      this.salary = salary;
    }

    _id: string;
    name: string;
    lastname; string;
    position: string;
    office: string;
    salary: number;
}
