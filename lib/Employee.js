function Employee(name = '', id = '', email = '') {
  this.name = name;
  this.email = email;
  this.id = id;
 }
  Employee.prototype.getName = (name) => {
   return {
    Name: this.name,
    
   }
  };
  console.log(this.name);

  // Employee.protype.getId = (id) => {
  //  return {
  //   ID: this.id
  //  }
  // };
  // console.log(this.id);
  //  Employee.prototype.getEmail = (email) => {
  //   return {
  //    Email: this.email
  //   }
  //  };
  //  console.log(this.email);
  // // getRole() {};

module.exports = Employee;