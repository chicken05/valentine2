let noCount = 0; // Track the number of times "No" is clicked

function nextPage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

function handleYes() {
    if (noCount >= 5) {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
    } else {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page4').style.display = 'block';
    }
}

function handleNo() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const flashBackground = document.getElementById('flashBackground');

    // Get current size of Yes button
    const currentWidth = parseFloat(window.getComputedStyle(yesButton).width);
    const currentHeight = parseFloat(window.getComputedStyle(yesButton).height);

    // Increase size of Yes button
    const increaseFactor = 1.15; // Growth factor
    const newWidth = currentWidth * increaseFactor;
    const newHeight = currentHeight * increaseFactor;

    yesButton.style.width = newWidth + 'px';
    yesButton.style.height = newHeight + 'px';

    // Gradually move the Yes button to overlap the No button
    if (newWidth > 200) {
        yesButton.style.transform = 'translateX(-20px)';
    }
    if (newWidth > 300) {
        yesButton.style.transform = 'translateX(-40px)';
    }
    if (newWidth > 400) {
        yesButton.style.transform = 'translateX(-60px)';
    }
    if (newWidth > 500) {
        yesButton.style.transform = 'translateX(-80px)';
    }
    if (newWidth > 600) {
        yesButton.style.transform = 'translateX(-100px)';
    }

    // Allow Yes button to fill the screen smoothly
    if (newWidth > window.innerWidth * 0.9) {
        yesButton.style.width = '100vw';
        yesButton.style.height = '100vh';
        yesButton.style.borderRadius = '0';
        yesButton.style.top = '0';
        yesButton.style.left = '0';
        yesButton.style.position = 'fixed';
        yesButton.style.zIndex = '1000';
        yesButton.style.transform = 'none'; // Reset any transform
    }

    // Change No button text dynamically
    noCount++;
    const noButtonMessages = [
        "No", "Please", "Why not :(", "Pretty Please",
        "Please Drew", "Why bb :(", "I BEG YOU", "😭",
        "pls", "진짜 제발", "Ok then..."
    ];
    if (noCount < noButtonMessages.length) {
        noButton.textContent = noButtonMessages[noCount];
    }

    // Flash the screen red
    document.body.style.backgroundColor = 'red';

    // Flash the background image
    flashBackground.style.display = 'block';
    setTimeout(() => {
        flashBackground.style.display = 'none';
    }, 300); // Flash duration

    // Reset the background color after the flash
    setTimeout(() => {
        document.body.style.backgroundColor = '#ffcccb';
    }, 300);
}

function goBackToQuestion() {
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}