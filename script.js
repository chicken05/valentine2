let noCount = 0; // Track the number of times "No" is clicked
const yesButtonMessages = [
    "Yes",
    "Please",
    "Pretty Please",
    "Please Drew",
    "Why's it taking you this long?",
    "Just say YES already!"
];

// Function to go to the next page
function nextPage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

// Function to handle "Yes" button click
function handleYes() {
    if (noCount >= 5) {
        // If "No" has been clicked at least 5 times, go to the happy page
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
    } else {
        // If "No" hasn't been clicked enough, go to the "Try Again" page
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page4').style.display = 'block';
    }
}

// Function to handle "No" button click
function handleNo() {
    noCount++; // Increment the "No" counter
    const yesButton = document.getElementById('yesButton');

    // Increase the size of the "Yes" button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 5) + 'px';

    // Update the "Yes" button text based on the number of "No" clicks
    if (noCount <= yesButtonMessages.length) {
        yesButton.textContent = yesButtonMessages[noCount];
    }
}

// Function to go back to the question page from the "Try Again" page
function goBackToQuestion() {
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}