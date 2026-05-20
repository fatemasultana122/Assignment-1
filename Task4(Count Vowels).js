function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

function showVowelCount() {

  let input = document.getElementById("textInput").value;

  let result = countVowels(input);

  let box = document.getElementById("result");
  box.innerText = result;

  // animation restart
  box.classList.remove("fade");
  void box.offsetWidth;
  box.classList.add("fade");
}