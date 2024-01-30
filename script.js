import config from './config.js';

const formSearchbutton = document.querySelector("#searchForm Button"),
    searchForm = document.querySelector("#searchForm"),
    searchResult = document.querySelector("#searchResult"),
    searchBox = document.querySelector("#searchBox"),
    showButton = document.querySelector("#showButton");

const accessKey = config.unsplashApiKey;


let page = 1;
let keyword = "";

async function image() {
    try {
        keyword = searchBox.value;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

        const response = await fetch(url);

        if (!response.ok) {
            console.error("Error:", response.status, response.statusText);
            return;
        }

        const data = await response.json();
        displayImages(data);

    }
    catch (error) {
        console.log(error);
        handleError(error);
    }
}

function displayImages(data) {
    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    results.forEach(result => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    });

    showButton.style.display = "block";
}


function handleError(error) {
    console.error("An error occurred:", error);
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    image();
});

showButton.addEventListener("click", () => {
    page++;
    image();
});