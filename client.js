console.log('JS load');

let employees = [];


$(document).ready(function() {
    console.log('JQ Load');
    

    // click listeners
    $('#submitButton').on("click", submitEmp);
    $('#submitButton').on("click", calculateMonthly);
    //$('#submitButton').on("click", displayMonthly)

});

function submitEmp () {
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
    
}

function calculateMonthly() {
console.log('in Calc Monthly');
let monthlyCost = 0;
    for(i = 0; i < employees.length; i++) {
        
        monthlyCost += Math.round((employees[i].annualSalary)) / 12;
        console.log(monthlyCost);
        
    }
    $('#monthlyOut').text(monthlyCost)


}

// function displayMonthly() {
//     $('#monthlyOut').text(monthlyCost)
// }

// monthlyCost = calculateMonthly();




// to do -- empty inputs, display some effect on click
