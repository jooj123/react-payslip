/**
 * Employee class to store the associated employee info
 */

class Employee {

  constructor(firstName, lastName, annualSalary, superRate) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._annualSalary = annualSalary;
    this._superRate = superRate;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get annualSalary() {
    return this._annualSalary;
  }

  get superRate() {
    return this._superRate;
  }

}

export default Employee;
