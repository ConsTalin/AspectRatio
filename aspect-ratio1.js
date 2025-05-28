
const { JSDOM } = require('jsdom');
const { document } = (new JSDOM('')).window;
// 
const fileInput = document.querySelector("#myfiles");
const { createCanvas, loadImage } = require('canvas');

loadImage('BOOK2.JPG').then((image) => {
  const canvas = createCanvas(image.width, image.height);
  console.log(image.width, image.height);
  asp(image.width, image.height);
  
 
}).catch((err) => {
  console.error('Error loading image:', err);
});



function asp(wdth, height){

    if(wdth > height){
      for(i=height; i>0 ; i--){
        
        if((wdth%i) === 0 && (height%i) === 0){
            // n = wdth/i;
            m = height/i;
            break;
            }
        }
        //
      } else if(wdth == height){
        n = 1;
        m = 1;

      }for(i=wdth; i>0 ; i--){
        if(wdth%i ===0 && height%i ===0){
            n = wdth/i;
            m = height/i;
            break;
            }
        }

        console.log("El aspecto es: " + n + ":" + m);
}

asp(2000, 800);


