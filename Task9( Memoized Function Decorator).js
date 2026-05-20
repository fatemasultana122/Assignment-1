function memoize(fn) {

  let cache = {};

  return function (...args) {

    let key = JSON.stringify(args);

    if (cache[key]) {
      console.log("From Cache ✅");
      return cache[key];
    }

    console.log("Calculated 🔥");

    let result = fn(...args);
    cache[key] = result;

    return result;
  };
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

const memoFactorial = memoize(factorial);

function calculateFactorial() {

  const number = Number(document.getElementById("numberInput").value);

  const result = memoFactorial(number);

  const box = document.getElementById("result");

  box.innerText = `Factorial of ${number} = ${result}`;

  // animation restart
  box.classList.remove("fade");
  void box.offsetWidth;
  box.classList.add("fade");
}