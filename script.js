const imageContainer = document.getElementById('image-container');
const button = document.querySelector('.my-button');
const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
function main () {
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(image => {
      const img = document.createElement('img');  
      img.className = "attributesOfImages";
      img.src = image.url;
      imageContainer.appendChild(img);
      });
  })
  
  .catch(error => console.error('Error:', error));
}
button.addEventListener('click', main) ; 

// не смог добавить лоадер