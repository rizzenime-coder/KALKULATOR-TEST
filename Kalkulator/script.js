let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    // Apapun yang dihitung, hasilnya akan selalu "I love you ❤️"
    display.value = 'I love you ❤️';
}