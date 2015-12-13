import TaxCalculator from './TaxCalculator.js';

/**
 * Monthly Payslip class used to generate monthly payslips
 */

class MonthlyPayslip {

  constructor() {
    this._payPeriod = '';
    this._grossIncome = 0;
    this._incomeTax = 0;
    this._netIncome = 0;
    this._superannuation = 0;
  }

  generatePayslip(employee, payPeriod) {
    /**
     * The calculation details will be the following:
     * • pay period = per calendar month
     * • gross income = annual salary / 12 months
     * • income tax = based on the tax table
     * • net income = gross income - income tax
     * • super = gross income x super rate
     */

    this._payPeriod = payPeriod;
    this._grossIncome = Math.round(employee.annualSalary / 12);
    this._incomeTax = TaxCalculator.generateIncomeTax(employee.annualSalary);
    this._netIncome = Math.round(this.grossIncome - this.incomeTax);
    this._superannuation = Math.round(this.grossIncome * (employee.superRate / 100));
  }

  get payPeriod() {
    return this._payPeriod;
  }

  get grossIncome() {
    return this._grossIncome;
  }

  get incomeTax() {
    return this._incomeTax;
  }

  get netIncome() {
    return this._netIncome;
  }

  get superannuation() {
    return this._superannuation;
  }

}

export default MonthlyPayslip;
