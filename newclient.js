//page ready
$(document).ready(function () {
    console.log('JQ Load');


    // click listeners
    $('#submitButton').on("click", submitEmp);
    $('#submitButton').on("click", CalcMonthly);
    //$('#submitButton').on("click", displayMonthly)
    //add listener for delete button here?
    $('.tableOfStuff').on("click", ".deleter", theDeleter);



});

function submitEmp() {
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let employeeId = $('#employeeIdInput').val();
    let jobTitle = $('#jobTitleInput').val();
    let annualSalary = $('#annualSalaryInput').val();

    $('#formOut').append(`
    <tr class="deletable">
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${employeeId}</td>
                <td>${jobTitle}</td>
                <td class="salaries">${annualSalary}</td>
                <td> <button class="deleter btn btn-danger">Delete</button> </td>
            
              </tr>
    `);


}


// function to add row > calculate

// function to calculate

// function to delete > calculate