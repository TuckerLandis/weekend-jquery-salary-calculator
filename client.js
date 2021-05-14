console.log('JS load');

let employees = [];


$(document).ready(function() {
    console.log('JQ Load');
    

    // click listeners
    $('#submitButton').on("click", submitBlast)

});

function submitBlast () {
    // get employee object from input boxes
    let employeeObj = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        employeeId: $('#employeeIdInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    }
    // console.log(employeeObj);
    employees.push(employeeObj);
    // console.log(employees);

    $('#formOutput').append(`
    <tr>
                <td>${employeeObj.firstName}</td>
                <td>${employeeObj.lastName}</td>
                <td>${employeeObj.employeeId}</td>
                <td>${employeeObj.jobTitle}</td>
                <td>${employeeObj.annualSalary}</td>
              </tr>
    `)


    // create and append new line with values of object 
    
    
    
}


// to do

// append object properties to >> [ array? ] >> rows of table   /// maybe dont need array
// append rows to dom 
