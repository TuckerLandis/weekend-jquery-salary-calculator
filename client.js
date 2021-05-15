console.log('JS load');

let employees = [];


$(document).ready(function() {
    console.log('JQ Load');
    

    // click listeners
    $('#submitButton').on("click", submitEmp);
    $('#submitButton').on("click", calculateMonthly);
    //$('#submitButton').on("click", displayMonthly)
    //add listener for delete button here?
    $('.tableOfStuff').on("click", ".deleter" , theDeleter); // 2nd arg issues? // had to 



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
    $('input').val('') // empties all inputs change if necessary
    // console.log('Employees: 'employees); // expect 1 new 
    
    // blasts employee to DOM
    $('#formOutput').append( ` 
   
   
        <tr class="toBeDeleted">
                <td>${employeeObj.firstName}</td>
                <td>${employeeObj.lastName}</td>
                <td>${employeeObj.employeeId}</td>
                <td>${employeeObj.jobTitle}</td>
                <td>${employeeObj.annualSalary}</td>
                <td> <button class="deleter btn btn-danger">Delete</button> </td>
            
              </tr>
    `) // close new employee
    
} // end submit employee



function calculateMonthly() {
console.log('in Calc Monthly');
let monthlyCost = 0;
    for(i = 0; i < employees.length; i++) {
        
        monthlyCost += (employees[i].annualSalary) / 12;
        monthlyCost = Math.round(monthlyCost)
        console.log(monthlyCost); // 
        
    } // end loop
    $('#monthlyOut').text(monthlyCost) 

    if (monthlyCost > 20000) {
        $('body').addClass('redAlert');
        console.log('RED ALERT');
        
        
        
    }

}


function theDeleter () {
    console.log('Why u no delet');
    console.log($(this));
    
    $(this).closest('tr').remove();
} // ???????


// to do display some effect on click
// when over 20k, display flashing red and audible siren
// <td> <button type="button" class="deleter btn btn-danger">Delete</button> </td>


// this closet tr


// the table on click #deleteButton