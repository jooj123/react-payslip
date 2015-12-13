import React, { PropTypes, Component } from 'react';
import './MonthlyPayslipList.scss';
import numeral from 'numeral';

class MonthlyPayslipList extends Component {

  static propTypes = {
    data: PropTypes.array,
  };

  render() {
    // no results
    if (!this.props.data.length) {
      return (
        <div></div>
      );
    }

    // used for react key
    let number = 0;

    const payslips = this.props.data.map((result) => {
      number++;
      return (
        <tr key={number}>
          <td>{result.name}</td>
          <td>{result.payPeriod}</td>
          <td>{numeral(result.grossIncome).format('$ 0,0[.]00')}</td>
          <td>{numeral(result.incomeTax).format('$ 0,0[.]00')}</td>
          <td>{numeral(result.netIncome).format('$ 0,0[.]00')}</td>
          <td>{numeral(result.superannuation).format('$ 0,0[.]00')}</td>
        </tr>
      );
    });

    return (
      <div className="MonthlyPayslipList">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Pay Period</th>
              <th>Gross Income</th>
              <th>Income Tax</th>
              <th>Net Income</th>
              <th>Superannuation</th>
            </tr>
            {payslips}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonthlyPayslipList;
