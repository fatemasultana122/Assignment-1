function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/\s/g, '');
  let reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

function checkPalindrome() {

  const text = document.getElementById("textInput").value;

  const result = isPalindrome(text);

  const box = document.getElementById("result");

  box.innerText =
    result
      ? `"${text}" is a Palindrome ✅`
      : `"${text}" is NOT a Palindrome ❌`;

  // animation restart
  box.classList.remove("fade");
  void box.offsetWidth;
  box.classList.add("fade");
}