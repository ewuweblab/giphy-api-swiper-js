// initialize Swiper
const swiper = new Swiper(".swiper", {});

// Go fetch Giphy API data
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=vRgpxNRNKxyIlc1sk9lEifd6kDJZDK57&limit=50&rating=r')
      .then( response => response.json() )
      .then( gifs => {
      
        // Check-Check data
        //console.log(gifs.data);
        //console.log(gifs.data[0].images.original.mp4);
      
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

