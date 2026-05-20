function fizzBuzz() {

  let n = document.getElementById("numberInput").value;

  let output = "";

  for (let i = 1; i <= n; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

      output += `
        <div class="fade rounded-xl bg-pink-500/10 border border-pink-400/20 px-4 py-2 text-pink-300 font-bold">
          🔥 FizzBuzz
        </div>
      `;

    } else if (i % 3 === 0) {

      output += `
        <div class="fade rounded-xl bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 text-cyan-300 font-bold">
          ⚡ Fizz
        </div>
      `;

    } else if (i % 5 === 0) {

      output += `
        <div class="fade rounded-xl bg-yellow-500/10 border border-yellow-400/20 px-4 py-2 text-yellow-300 font-bold">
          ✨ Buzz
        </div>
      `;

    } else {

      output += `
        <div class="fade rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-slate-200">
          ${i}
        </div>
      `;

    }
  }

  document.getElementById("result").innerHTML = output;
}