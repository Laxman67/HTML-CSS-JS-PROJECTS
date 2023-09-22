const inputEl = document.getElementById("input");
const URL = "";
const infoText = document.getElementById("info-text");

async function fetchAPI(word) {
  try {
    infoText.innerText = `Searching the meaning of  "${word}"`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const result = await fetch(url).then((res) => res.json());
    console.log(result);
    infoText.innerText = "Type a word and Press Enter";
  } catch (error) {
    infoText.innerText = "Result NOT ! Found";
  }
}
inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
