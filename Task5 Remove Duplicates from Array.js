function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function handleRemove() {

  const input = document.getElementById("arrayInput").value;

  const arr = input
    .split(",")
    .map(num => Number(num.trim()))
    .filter(num => !isNaN(num));

  const uniqueArr = removeDuplicates(arr);

  const box = document.getElementById("result");

  box.innerText = "[" + uniqueArr.join(", ") + "]";

  // animation restart
  box.classList.remove("fade");
  void box.offsetWidth;
  box.classList.add("fade");
}