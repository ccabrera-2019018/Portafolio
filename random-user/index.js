/*Que es una promesa
que es una pendiente */

//Asincronia
/*Tipo de programacion que me va a servir
cuando yo dependo de otra cosa.

En otras palabras, esperar por completo una instrucción, sin obstruit
el hilo de procesos.
*/

//Formas de manejar la Asincronia
/**
 * Callbacks
 * Promises
 * Async / Await
/*
Sincronia -> que se hace en el momento 
Asinctronia -> No se hace en el momento
*/

/*
function getUsersWithCallbacks(callback){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())//La respuesta la traduzco a JSON
    .then(data =>{
        const {results} = data;
        callback(null, results)
    })
    .catch(error =>{
        callback(error, null)
    })
}

getUsersWithCallbacks((error, results)=>{
    if(error) console.log('Error al obtener datos', error)
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const phone = document.getElementById('phone');
    for(let user of results){
        name.innerText = user.name.first;
        surname.innerText = user.name.last;
        phone.innerText = user.phone;
    }
})
*/

//CALBACKS
/*const getUsers = ()=>{

}*/

//PROMESAS
/*const getUsersWithPromise = () => {
    return new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const { results } = data;
                resolve(results)
            })
            .catch(error => reject(error))
    })
}

getUsersWithPromise()
    .then(results => {
        const name = document.getElementById('name');
        const surname = document.getElementById('surname');
        const phone = document.getElementById('phone');
        for(const user of results){
            name.innerText = user.name.first;
            surname.innerText = user.name.last;
            phone.innerText = user.phone;
        }
    }
    )
.catch(error => console.error(error))*/

//ASYNC / WAIT

let personas = [];

const getUsersWithAsync = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const { results } = await response.json();
        const tabla = document.getElementById('tablita');
        for (const user of results) {
            tabla.innerHTML += `
                <tr id="${user.id.name}">
                    <td>${user.name.first}</td>
                    <td>${user.name.last}</td>
                    <td>${user.phone}</td>
                </tr>
            `
        }

    } catch (error) {
        console.error(error);
    }
}

getUsersWithAsync();