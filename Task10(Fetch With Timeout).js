function fetchWithTimeout(url, ms) {

  return Promise.race([

    fetch(url),

    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request Timed Out ⏳")), ms)
    )
  ]);
}

async function fetchData() {

  const url = document.getElementById("urlInput").value;
  const timeout = Number(document.getElementById("timeoutInput").value);

  const resultBox = document.getElementById("result");

  resultBox.innerText = "Loading...";

  try {

    const response = await fetchWithTimeout(url, timeout);
    const data = await response.json();

    resultBox.innerText = JSON.stringify(data, null, 2);

  } catch (error) {

    resultBox.innerText = error.message;
  }

  // restart animation
  resultBox.classList.remove("fade");
  void resultBox.offsetWidth;
  resultBox.classList.add("fade");
}