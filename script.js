// initialize Swiper
const swiper = new Swiper(".swiper", {});

// VARIABLES
// API Key
const API_KEY = 'vRgpxNRNKxyIlc1sk9lEifd6kDJZDK57';
// Search term
searchTerm = 'coffee';

// Go fetch Giphy API data
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=10`)
      .then( response => response.json() )
      .then( gifs => {
      
        // Check Check         
        console.log(gifs.data);
        console.log(gifs.data[2].images.original.mp4);
      
      // Get container for data
      const videoContainer = document.querySelector('.swiper-wrapper');         
      
       // Loop through the array of data
      gifs.data.forEach( gif => {
        
          // template 
          const template  = `
            <video class="swiper-slide" src="${gif.images.original.mp4}" autoplay loop></video>
          `;
        
          // append
          videoContainer.insertAdjacentHTML("afterbegin", template);
        
      });
      
    });