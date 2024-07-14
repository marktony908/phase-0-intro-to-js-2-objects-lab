// Write your solution in this file!
// employee.js

// index.js

// index.js

const employee = {
    name: "Mark",
    streetAddress: "Kimberly Street 42"
  };
  
  function updateEmployeeWithKeyAndValue(emp, key, value) {
    return {
      ...emp,
      [key]: value
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
    emp[key] = value;
    return emp;
  }
  
  function deleteFromEmployeeByKey(emp, key) {
    const newEmployee = { ...emp };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(emp, key) {
    delete emp[key];
    return emp;
  }
  
  // Export the employee and functions for testing
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  
  
  

