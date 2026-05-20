function reverseString(str) {
    return str.split('').reverse().join('');
}

function showReverse() {

    // Get input value
    let input = document.getElementById("inputText").value;

    // Reverse string
    let reversed = reverseString(input);

    // Get result element
    let result = document.getElementById("result");

    // Display result
    result.innerText = reversed;

    // Restart animation
    result.classList.remove("animate-pop");

    void result.offsetWidth;

    result.classList.add("animate-pop");
}