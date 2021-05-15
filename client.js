console.log('JS load');

let employees = [];


$(document).ready(function () {
    console.log('JQ Load');


    // click listeners
    $('#submitButton').on("click", submitEmp);
    $('#submitButton').on("click", newerCalcMonthly);
    //$('#submitButton').on("click", displayMonthly)
    //add listener for delete button here?
    $('.tableOfStuff').on("click", ".deleter", theDeleter);



});

function submitEmp() {
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
    $('#formOutput').append(` // open
   
   
        <tr class="toBeDeleted">
                <td>${employeeObj.firstName}</td>
                <td>${employeeObj.lastName}</td>
                <td>${employeeObj.employeeId}</td>
                <td>${employeeObj.jobTitle}</td>
                <td class="salaries">${employeeObj.annualSalary}</td>
                <td> <button class="deleter btn btn-danger">Delete</button> </td>
            
              </tr>
    `) // close new employee

} // end submit employee





// function calculateMonthly() {

// console.log('in Calc Monthly');
// let monthlyCost = 0;
//     for(i = 0; i < employees.length; i++) {

//         monthlyCost += (employees[i].annualSalary) / 12;
//         monthlyCost = Math.round(monthlyCost)
//         console.log(monthlyCost); // 

//     } // end loop
//     $('#monthlyOut').text(monthlyCost) 

//     if (monthlyCost > 20000) {
//         $('body').addClass('redAlert');
//         console.log('RED ALERT');



//     }

// }


function theDeleter() {
    console.log('Why u no delet');
    console.log($(this));
    $(this).closest('tr').remove();
    newerCalcMonthly();
    // find a variable based off of class = annual salary row text
    // make sure this is number


}





// let salaryObj = ('.salaries');
// salaryObj.each( function(i) { 
//     this
//  } )

// salaryArray = $('.salaries').closest('td').text() //.closest().text();
// console.log(salaryArray);

// console.log($('.salaries').text())




let salaryArray = [];


// returns undefined
// function newCalcMonthly() {
//     // target all elements class annual salary 
//     let salaryObj = $('.salaries').text();
//     console.log('salary obj', salaryObj);


//     let sum = 0;

//     //push those to a new array
//     for(let salary of salaryObj ) {
//         salaryArray.push(salary);
//     }
//     // iterate on that array and add
//     for(i = 0; i < salaryArray.length; i++ ) {

//         sum += salaryArray[i];
//         console.log(sum);
//     }
//     console.log(sum);

//     // add them / 12
//     // append them
// }

console.log(newCalcMonthly());


console.log($('.salaries'));


function newerCalcMonthly() {
    let sum = 0;
    $('.salaries').each(function () {
        sum += parseFloat($(this).text());
    }); // end inner
    console.log(sum);
    sum = sum / 12;
    $('#monthlyOut').text(sum);

}; // end function


// take inputs to page
// get salaries text from page
// run calc
// delete > run calc