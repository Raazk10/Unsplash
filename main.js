const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const grid = document.getElementById("grid");

searchButton.addEventListener("click", function () {
  loadImg();
});

async function loadImg() {
  removeImages();
  const url =
    "https://api.unsplash.com/search/photos/?query=" +
    searchInput.value +
    "&per_page=20&client_id=qMlWbEJzT2NvkdZFMKc9HP9ukVqMWKX1ihMyjYmixy8";

  const response = await fetch(url);
  const data = await response.json();
  data.results.forEach((img) => {
    const imgElement = document.createElement("img");
    imgElement.src = img.urls.small;
    grid.appendChild(imgElement);
  });
}

function removeImages() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}
