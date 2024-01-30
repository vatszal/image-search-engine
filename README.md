# Image Search Engine

Welcome to the Image Search Engine project! This web application allows users to search for images using the Unsplash API. The project is built with HTML, CSS, and JavaScript.

## Features

- Search for images based on user input.
- Display search results with links to the original images on Unsplash.
- Implement a "Show More" button to load additional search results.

![image](https://github.com/vatszal/image-search-engine/assets/135651028/8103a097-4a42-445c-90c8-5c965c80f719)

![image](https://github.com/vatszal/image-search-engine/assets/135651028/54db91fb-2f72-4a4c-9f95-d0ab75ac38f7)
![image](https://github.com/vatszal/image-search-engine/assets/135651028/3e96de6d-fe17-4391-8d6d-27540ae3959a)




## Getting Started

### Prerequisites

- Make sure you have a valid Unsplash API key.
- If you are using GitHub Actions for deployment, you may need to set up GitHub Secrets.

### Installation

1. **Clone the repository:**

   'git clone https://github.com/vatszal/image-search-engine.git'

2. **Create a `config.js` file in the root directory and export your Unsplash API key:**

   'const config = {
       unsplashApiKey: 'your-api-key',
   };

   export default config;'

   If you are using GitHub Actions, set the 'UNSPLASH_API_KEY' secret in your repository settings.

3. **Open `index.html` in your preferred web browser or deploy the project using GitHub Pages.**

## Usage

1. Open `index.html` in your web browser.
2. Enter a search query in the input field and click the "Search" button.
3. View the search results with images and click on the images to open the original links on Unsplash.
4. Click the "Show More" button to load additional search results.

## Acknowledgments

- This project uses the Unsplash API for image search. The developer acknowledges and thanks Unsplash for providing the platform. [Unsplash API](https://unsplash.com/developers)
