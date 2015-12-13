import { describe, it } from 'mocha';
import { expect } from 'chai';
import Employee from '../core/Employee';
import MonthlyPayslip from '../core/MonthlyPayslip';

describe('CSVPayslipParser', () => {
  it('should process csv', () => {
    const data = '';

    const payslipParser = CSVPayslipParser(data)
    const employee = new Employee('David', 'Rudd', 60050, 9);
    const payslip = new MonthlyPayslip();
    payslip.generatePayslip(employee, '01 March - 31 March');
    expect(payslip.payPeriod).to.be.equal('01 March - 31 March');
    expect(payslip.grossIncome).to.be.equal(5004);
    expect(payslip.incomeTax).to.be.equal(922);
    expect(payslip.netIncome).to.be.equal(4082);
    expect(payslip.superannuation).to.be.equal(450);
  });

});
