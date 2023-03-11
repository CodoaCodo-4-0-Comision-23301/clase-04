let myDom = document; // document es un objeto global


// const myDog = {
//    name: "Firulais"

// };

// const myCat = {
//    "name": "Kity"

// };

// ambas formas son validas


// console.log(myDog.name);
// console.log(myCat.name);

// class Mouse {
//     constructor(name, age ) {
//         this.name = name;
//         this.age = age;

//    }
// }

// const myMouse = new Mouse("Perez", 4);
// let nombre = prompt("¿Cuál es tu nombre?");
// alert(`¡Hola ${nombre}!`);

/* Prompt */
// let name = prompt("Cual es tu nombre?")

/* div*/
// let myApp = document.getElementById("myApp");

/* reemplazo la info del html */
// myApp.innerHTML = "Hola " + name + "!, Bienvenido a mi sitio!!";

class Button {
    constructor (parentID, text){
        this.parentID = parentID;
        this.text = text;
    }
    render() {
        let app = document.getElementById(this.parentID);
        app.innerHTML = `<button>${this.text}</button>`;
      }
    
}
  let btnLike = document.getElementById('app');
      let likesCounter = document.getElementById('likes-counter');
      
      let likes = 0;
      
      btnLike.addEventListener('click', function() {
        likes++;
        likesCounter.textContent = likes;
      });
// Crear instancia del botón con parentID y text
let myButton = new Button("app", "Botón de Likes");

// Llamar el método render
myButton.render();

// Nuevo objeto imput
class Input {
  constructor(parentID, placeHolder){
    this.parentID = parentID;
    this.placeHolder = placeHolder;
  };
  render() {
    let texto = document.getElementById(this.parentID);
    texto.innerHTML = `<input type="text" placeholder="${this.placeHolder}">`;
  }
}
let myInput = new Input("app2", "Ingrese texto aqui");
myInput.render();