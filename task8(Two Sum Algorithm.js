function twoSum(nums, target) {

  let map = {};

  for (let i = 0; i < nums.length; i++) {

    let complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
}

function findTwoSum() {

  const nums = document.getElementById("numbersInput").value
    .split(",")
    .map(num => Number(num.trim()))
    .filter(num => !isNaN(num));

  const target = Number(document.getElementById("targetInput").value);

  const result = twoSum(nums, target);

  const box = document.getElementById("result");

  box.innerText =
    result.length
      ? `Indexes: [${result.join(", ")}]`
      : "No matching pair found ❌";

  // animation restart
  box.classList.remove("fade");
  void box.offsetWidth;
  box.classList.add("fade");
}