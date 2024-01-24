// Find all the TR elements within the table with id 'Table2'
const tableRows = document.querySelectorAll('#Table2 tr');

// Iterate through each table row
tableRows.forEach(row => {
    // Find the first radio button in the row, which should correspond to "Strongly Agree"
    const stronglyAgreeButton = row.querySelector('input[type="radio"]');

    // Check if the radio button exists and click it
    if (stronglyAgreeButton) {
        stronglyAgreeButton.checked = true;
    }
});

// Submission Button
const submissionBtn = document.getElementById('ContentPlaceHolderright_ContentPlaceHoldercontent_pstEvalBtn');

submissionBtn.click();
