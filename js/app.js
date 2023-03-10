let myDom = document; // document es un objeto global


const myDog = {
   name: "Firulais"

};

const myCat = {
   "name": "Kity"

};

// ambas formas son validas


console.log(myDog.name);
console.log(myCat.name);

class Mouse {
    constructor(name, age ) {
        this.name = name;
        this.age = age;

   }
}

const myMouse = new Mouse("Perez", 4);
// let nombre = prompt("¿Cuál es tu nombre?");
// alert(`¡Hola ${nombre}!`);

/* Prompt */
let name = prompt("Cual es tu nombre?")

/* div*/
let myApp = document.getElementById("myApp");

/* reemplazo la info del html */
myApp.innerHTML = "Hola " + name + "!, Bienvenido a mi sitio!!";
class Button {
    constructor (parentID, text){
        this.parentID = parentID;
        this.text = text;
    }
    render() {
        let app = document.getElementById(this.parentID);
        let button = document.createElement("button");
        button.innerHTML = this.text;
        app.appendChild(button);
      }
    
}
  const btnLike = document.getElementById('app');
      const likesCounter = document.getElementById('likes-counter');
      
      let likes = 0;
      
      btnLike.addEventListener('click', function() {
        likes++;
        likesCounter.textContent = likes;
      });
// Crear instancia del botón con parentID y text
const myButton = new Button("app", "Like");

// Llamar el método render
myButton.render()