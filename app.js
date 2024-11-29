
const arrPalabras = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

function palabrasMasGrandes (palabra, arreglo){
    const palabrasGrandes = [];
    for (let i = 0; i < arreglo.length; i++) {
        if(palabra.length < arreglo[i].length){
            palabrasGrandes.push(arreglo[i]);
        }
    }
    console.log(palabrasGrandes);
}

palabrasMasGrandes("coding",arrPalabras);

function listaPalabras(arreglo){
    const ul = document.getElementById('lista');

    arreglo.forEach(string => {
        
    });
}

/* 
Feedback:
tiempo
falta mejorar la logica
la parte de la lista - hubieron algunos errores aunque después se corrigieron

buen manejo de los ciclos
buen manejo de funciones y arreglos */

/* 

Hecho despues del live coding

    function listaPalabras(arreglo){
    const ul = document.getElementById('lista');

    arreglo.forEach(string => {
        const li = document.createElement('li');
        li.textContent = string;
        ul.appendChild(li);
    });
}

listaPalabras(arrPalabras); 

*/