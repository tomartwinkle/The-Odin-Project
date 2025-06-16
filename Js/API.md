# API
Application Programming Interface - servers that are used for external data
There are many ways to access an API but most of them do the same thing basically. API's are accessed through URL's and most of the instructions for working with an API is writing in its documentation.
 In most cases, you will have to create an account and request an “API key” from the API service before attempting to fetch data from their endpoints (specific URLs that you use to access a particular function or data within the API). Once obtained, an API key will usually have to be included with every data request.
```
const apikey='VMCWGLTGX5BDK6GZP5M6RSJJE';
const city='Delhi';
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apikey}&contentType=json`;

fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        document.getElementById("output").textContent = "Error: " + error;
      });
```
we recieve a huge list of properties in our browser.
# Fetching Data
## Key Concepts
Use the fetch() API for HTTP requests in JavaScript.

Giphy API lets you fetch GIFs using various endpoints — in this case, the translate endpoint.

Promises are used: .then() to handle success and .catch() to handle errors.

CORS (mode: 'cors') allows your browser to access cross-origin APIs.

## Giphy API Setup
Sign up at Giphy Developers to get your API key.

Use the translate endpoint:
```
https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=SEARCH_TERM
💻 Example Code (Inline in HTML)
html
Copy
Edit
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Random Giphy</title>
</head>
<body>
  <img src="#" alt="Giphy Image" width="400">
  <script>
    const img = document.querySelector('img');

    fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
      img.src = data.data.images.original.url;
    })
    .catch(error => {
      console.error('Error fetching GIF:', error);
    });
  </script>
</body>
</html>
```
## Notes
You need to replace YOUR_KEY_HERE with your actual Giphy API key.

The translate endpoint picks a random-ish gif related to your search term.

Refreshing the page will fetch a new GIF each time.

Avoid exposing sensitive API keys in public code — use only free/public ones in the frontend.

## Assignment 
My solution : 
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link href="styles.css" rel="stylesheet">
</head>
<body>
    <button class="searchBtn">Search</button>
  <img src="#">
  <script>
    const apikey='d2qoouQhqiR6nzPPpiQUx6OdwqiA2u25';
  const img = document.querySelector('img');
 const searchBtn=document.querySelector(".searchBtn"); 
  searchBtn.addEventListener("click",()=>{
    let search=prompt("Search topic : ");
  
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apikey}&s=${search}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src=response.data.images.original.url;
    })
    .catch(function(error){
        console.log("error" + error);
    })
});
  </script>
</body>
</html>
```
