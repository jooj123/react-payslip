/**
 * CSVPayslipParser class used to extract csv info from the data passed to it
 */

import Employee from './Employee.js';
import MonthlyPayslip from './MonthlyPayslip.js';

const FIRST_NAME = 0;
const LAST_NAME = 1;
const ANNUAL_SALARY = 2;
const SUPER_RATE = 3;
const PAY_PERIOD = 4;

class CSVPayslipParser {

  constructor(data) {
    this._data = data;
    this.processLine = this.processLine.bind(this);
  }

  processCSV() {
    const lines = this._data.split('\n');
    return lines.map((line) => {
      return this.processLine(line);
    });
  }

  processLine(line) {
    const fields = line.split(',');
    const employee = new Employee(fields[FIRST_NAME], fields[LAST_NAME], parseInt(fields[ANNUAL_SALARY], 10), parseInt(fields[SUPER_RATE], 10));
    const payslip = new MonthlyPayslip();
    payslip.generatePayslip(employee, fields[PAY_PERIOD]);

    return {
      name: employee.firstName + ' ' + employee.lastName,
      payPeriod: payslip.payPeriod,
      grossIncome: payslip.grossIncome,
      incomeTax: payslip.incomeTax,
      netIncome: payslip.netIncome,
      superannuation: payslip.superannuation,
    };
  }

}

export default CSVPayslipParser;
