const textEL = document.querySelector(".text");
const usernameEL = document.querySelector(".username");

async function getData() {
  let data = await fetch("https://testimonialapi.vercel.app/api");

  let res = await data.json();

  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      textEL.textContent = res[i].message;
      usernameEL.textContent = res[i].name;
    }
  }, 2000);
}

getData();
