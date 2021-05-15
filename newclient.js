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

// append inputs as new row, calculate monthly
function submitEmp() {

    // sets variables to input values
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
    `); //end append

    $('input').val(''); // empties inputs

    CalcMonthly();
}

function CalcMonthly() {
    let monthlyCost = 0;
    $('.salaries').each(function () {
        monthlyCost += parseFloat($(this).text());
    }); // end inner
    console.log(monthlyCost);
    monthlyCost = Math.round(monthlyCost / 12);
    $('#monthlyOut').text(monthlyCost);

    if (monthlyCost > 20000) {
        $('body').addClass('redAlert');
        console.log('RED ALERT');
    }

    } // end calcMonthly

    function theDeleter() {
        console.log('Why u no delet');
        console.log($(this));
        $(this).closest('tr').remove();
        CalcMonthly();
    }