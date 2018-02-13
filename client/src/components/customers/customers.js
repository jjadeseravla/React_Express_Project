import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super(); //super because its being embedded to a parent component
    this.state = {
      customers: []
    }
  }

  //request to backend to fill customers empy array with them
  componentDidMount() {
    fetch('/api/customers') //dont need to do https/localhost/5000 etc cos we put proxy host on package.json
      .then(res => res.json()) //.then promise that takes result and maps it to res.json
      .then(customers => this.setState({customers: customers}, () => console.log('Customers fetched...', customers))); //gives us our customers from backend to put inside state
  }


  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>{ customer.firstName } { customer.lastName }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Customers;
