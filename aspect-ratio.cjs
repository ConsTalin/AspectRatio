

//Función para calcuñlar el aspecto de la imagen
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
      return n + ":" + m;
}
function addElement(param, param2) {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("El aspect ratio es " + param);
  var newContent2 = document.createElement("img");
  var newboton = document.createElement("button");
  newboton.setAttribute("id", "calculate");
  newboton.setAttribute("onclick", "window.location.reload();");
  newboton.innerHTML = "Volver a calcular";
  newContent2.src = param2;
  newDiv.appendChild(newContent); //añade texto al div creado.
  document.body.appendChild(newContent2);
  document.body.appendChild(newboton); 
  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, newContent2);
 
}

const newboton = document.querySelector("button");  


//Evento que se añade al botón para coger la imágen y sus dimensiones
const boton = document.querySelector("#calculate");
boton.addEventListener("click", (event) => {
  const fileInput = document.querySelector("#myfiles");
  let file = fileInput.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function(e) {
      let img = new Image();
      img.src = e.target.result;
      img.onload = function() {
        let width = img.width;
        let height = img.height;
        let res = asp(width, height);
        let formulario = document.querySelector("form");
        formulario.remove();
        addElement(res, img.src);

      };
    };
    reader.readAsDataURL(file);
  }
});

  

