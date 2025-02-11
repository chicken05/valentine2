function nextPage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

function yesResponse() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
}

function noResponse() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page4').style.display = 'block';
}

document.getElementById('yesButton').addEventListener('click', function() {
    let currentSize = parseFloat(window.getComputedStyle(this).fontSize);
    this.style.fontSize = (currentSize + 5) + 'px';
});