const btnEl = document.getElementById("btn");
const emojiNameEL = document.getElementById("emoji-name");
const API_KEY = "0ec4807294677600a591a4de917e2ddca16789f2";

//
const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=0ec4807294677600a591a4de917e2ddca16789f2"
  );

  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * 1500);

  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEL.innerText = emoji[randomNum].emojiCode;
});
