const h1 = document.querySelector('h1');
const p = document.querySelector('q');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerText = 'Patito';


//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde'); sirve para cambiar en tiempo real la clase
//h1.classList.contains('verde'); un validador para saber si en este caso la clase 
//tiene de nombre "verde"

input.value = "456";

const img = document.createElement('img');

img.setAttribute('src', 'https://www.zooplus.es/magazine/wp-content/uploads/2018/06/Como-adaptar-un-gato-a-una-nueva-casa.jpg');

console.log(img);


pid.innerHTML = "";
pid.append(img);