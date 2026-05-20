function titleCase(str) {
  return str
    .split(' ')
    .map(word =>
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
    )
    .join(' ');
}

function convertTitleCase() {

  const text = document.getElementById("textInput").value;

  const result = titleCase(text);

  const box = document.getElementById("result");

  box.innerText = result;

  // restart animation
  box.classList.remove("fade");
  void box.offsetWidth;
  box.classList.add("fade");
}