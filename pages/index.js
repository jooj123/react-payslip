import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import MonthlyPayslipList from '../components/MonthlyPayslipList';
import CSVPayslipParser from '../core/CSVPayslipParser';

export default class extends Component {

  constructor() {
    super();
    this.state = {
      monthlyPayslips: [],
    };
    this.onDrop = this.onDrop.bind(this);
    this.readFile = this.readFile.bind(this);
  }

  onDrop(files) {
    if (files) {
      this.readFile(files[0]);
    }
  }

  readFile(file) {
    const reader = new FileReader();

    reader.readAsText(file);
    reader.onload = () => {
      const csvPayslipParser = new CSVPayslipParser(reader.result);
      this.setState({
        monthlyPayslips: csvPayslipParser.processCSV(),
      });
    };
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop} className="Layout-dropzone" multiple={false}>
          <div>Drop file here, or click to select file to upload.</div>
        </Dropzone>
        <MonthlyPayslipList data={this.state.monthlyPayslips} />
      </div>
    );
  }

}
