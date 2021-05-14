console.log('JS load');

$(document).ready(function() {
    console.log('JQ Load');
    

    // click listeners
    $('#submitButton').on("click", submitBlast)



});

function submitBlast () {
    // get employye object from input boxes
    let employeeObj = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        employeeId: $('#employeeIdInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    }
    console.log(employeeObj);
    
}