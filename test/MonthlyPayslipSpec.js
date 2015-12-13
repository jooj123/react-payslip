import { describe, it } from 'mocha';
import { expect } from 'chai';
import Employee from '../core/Employee';
import MonthlyPayslip from '../core/MonthlyPayslip';

describe('MonthlyPayslip', () => {
  it('should generate payslip happy case', () => {
    const employee = new Employee('David', 'Rudd', 60050, 9);
    const payslip = new MonthlyPayslip();
    payslip.generatePayslip(employee, '01 March - 31 March');
    expect(payslip.payPeriod).to.be.equal('01 March - 31 March');
    expect(payslip.grossIncome).to.be.equal(5004);
    expect(payslip.incomeTax).to.be.equal(922);
    expect(payslip.netIncome).to.be.equal(4082);
    expect(payslip.superannuation).to.be.equal(450);
  });

  it('should generate payslip happy case 2', () => {
    const employee = new Employee('Ryan', 'Chen', 120000, 10);
    const payslip = new MonthlyPayslip();
    payslip.generatePayslip(employee, '01 March - 31 March');
    expect(payslip.payPeriod).to.be.equal('01 March - 31 March');
    expect(payslip.grossIncome).to.be.equal(10000);
    expect(payslip.incomeTax).to.be.equal(2696);
    expect(payslip.netIncome).to.be.equal(7304);
    expect(payslip.superannuation).to.be.equal(1000);
  });

  it('should generate payslip with no tax', () => {
    const employee = new Employee('John', 'Doe', 18200, 10);
    const payslip = new MonthlyPayslip();
    payslip.generatePayslip(employee, '01 March - 31 March');
    expect(payslip.payPeriod).to.be.equal('01 March - 31 March');
    expect(payslip.grossIncome).to.be.equal(1517);
    expect(payslip.incomeTax).to.be.equal(0);
    expect(payslip.netIncome).to.be.equal(1517);
    expect(payslip.superannuation).to.be.equal(152);
  });

  it('should generate payslip highest tax bracket', () => {
    const employee = new Employee('John', 'Doe', 180001, 10);
    const payslip = new MonthlyPayslip();
    payslip.generatePayslip(employee, '01 January - 31 January');
    expect(payslip.payPeriod).to.be.equal('01 January - 31 January');
    expect(payslip.grossIncome).to.be.equal(15000);
    expect(payslip.incomeTax).to.be.equal(4546);
    expect(payslip.netIncome).to.be.equal(10454);
    expect(payslip.superannuation).to.be.equal(1500);
  });

  it('should generate payslip with second tax bracket', () => {
    const employee = new Employee('John', 'Doe', 18300, 10);
    const payslip = new MonthlyPayslip();
    payslip.generatePayslip(employee, '01 January - 31 January');
    expect(payslip.payPeriod).to.be.equal('01 January - 31 January');
    expect(payslip.grossIncome).to.be.equal(1525);
    expect(payslip.incomeTax).to.be.equal(2);
    expect(payslip.netIncome).to.be.equal(1523);
    expect(payslip.superannuation).to.be.equal(153);
  });

  it('should throw an error when the salary is invalid', () => {
    const employee = new Employee('John', 'Doe', -10, 10);
    const payslip = new MonthlyPayslip();
    expect(payslip.generatePayslip.bind(MonthlyPayslip, employee, '01 January - 31 January')).to.throw(Error);
  });
});
