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
   // annualSalary = annualSalary.toLocaleString(); // this doesn't seem to work here

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
    monthlyCost = monthlyCost.toLocaleString();
    $('#monthlyOut').text(`Monthly Cost: $ ${monthlyCost}`);

    if (monthlyCost > 20000) {
        $('#monthlyOut').addClass('redAlert');
        // alert('Monthly cost is over 20k'); eh, needed to click okay twice, not needed
        console.log('RED ALERT');
    } else {
        $('#monthlyOut').removeClass('redAlert');
    } // end alert

} // end calcMonthly

function theDeleter() {
    $(this).closest('tr').remove();
    CalcMonthly();
}