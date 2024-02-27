let options = {
    NewGame: ["Manzana","Frambuesa","Fresa","Sandia","Mandarina"],
};

//Contadores
let wincount = 0;
let count = 0;

const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Bienvenido, da click en el botón para comenzar.</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in options) {
      buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
  };

function BotonesPantalla() {
    const root = document.querySelector(".buttons-parent");
    let buttonsDataArray = Array(26).fill(null);
    let i = 65;
    buttonsDataArray = buttonsDataArray.map((value) => {
        return String.fromCharCode(i++);
    });

    buttonsDataArray.array.forEach(el => {
        const btn = document.createElement("button");
        btn.textContent = el;
        root.appendChild(btn);
    });
}

function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");
        
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, MATH.PI * 2, true);
        ctx.moveTo(110, 75);
        ctx.stroke();
    }
}