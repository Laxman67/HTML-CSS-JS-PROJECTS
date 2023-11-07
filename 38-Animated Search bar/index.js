const searchBarContainer= document.querySelector(".search-bar-container")
const magnifierEl= document.querySelector(".magnifier")

magnifierEl.addEventListener("click",()=>{
    searchBarContainer.classList.toggle("active")

});