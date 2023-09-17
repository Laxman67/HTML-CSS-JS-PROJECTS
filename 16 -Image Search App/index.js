const accessKey = "po2-ZZjDkJB3So02ZyeM_u9zgkfLrc2KswCHbRO8d0w";
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = searchInputEl.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  let response = await fetch(url);
  let data = await response.json();

  if (page == 1) {
    searchResultsEl.innerHTML = "";
  }

  // Access only result object
  const results = data.results;

  results.map((result) => {
    //created a wrapper div
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    //Create a image result
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    // Append
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);
  });
  page++;

  if (page > 1) {
    showMoreButtonEl.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});
