/**
 * Tax Calculator (2012-13 apply from 1 July 2012.)
 */

class TaxCalculator {

  constructor() {

  }

  static generateIncomeTax(annualSalary) {
    /**
     * 0 - $18,200 Nil
     * $18,201 - $37,000 19c for each $1 over $18,200
     * $37,001 - $80,000 $3,572 plus 32.5c for each $1 over $37,000
     * $80,001 - $180,000 $17,547 plus 37c for each $1 over $80,000
     * $180,001 and over $54,547 plus 45c for each $1 over $180,000
     */

    if (annualSalary >= 0 && annualSalary <= 18200) {
      return 0;
    } else if (annualSalary >= 18201 && annualSalary <= 37000) {
      return Math.round(((annualSalary - 18200) * 0.19) / 12);
    } else if (annualSalary >= 37001 && annualSalary <= 80000) {
      return Math.round((3572 + (annualSalary - 37000) * 0.325) / 12);
    } else if (annualSalary >= 80001 && annualSalary <= 180000) {
      return Math.round((17547 + (annualSalary - 80000) * 0.37) / 12);
    } else if (annualSalary >= 180001) {
      return Math.round((54547 + (annualSalary - 180000) * 0.45) / 12);
    }

    throw new Error('Incorrect annualSalary passed!');
  }

}

export default TaxCalculator;
