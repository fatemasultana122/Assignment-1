function findMax(arr) {
  return Math.max(...arr);
}

function findMaximum() {

  let input = document.getElementById("arrayInput").value;

  let numbers = input
    .split(',')
    .map(num => Number(num.trim()))
    .filter(num => !isNaN(num));

  if (numbers.length === 0) {
    document.getElementById("result").innerText = "Invalid Input";
    return;
  }

  let maxNumber = findMax(numbers);

  let resultBox = document.getElementById("result");
  resultBox.innerText = maxNumber;

  // restart animation
  resultBox.classList.remove("fade");
  void resultBox.offsetWidth;
  resultBox.classList.add("fade");
}