//para pegar todas as class
/* let estilo = document.querySelectorAll('.estilo')
for(texto = 0; texto < estilo.length; texto++){
    estilo[texto].style.background = 'blue'
    estilo[texto].style.color = 'white'
    estilo[texto].innerText = estilo[texto].innerText.toUpperCase()
}
 */


//para pegar id um por 1
/* let estilo1 = document.querySelector('#estilo1')
estilo1.style.color = 'red'

let estilo2 = document.querySelector('#estilo2')
estilo2.style.color = 'blue'

let estilo3 = document.querySelector('#estilo3')
estilo3.style.color = 'green'

let estilo4 = document.querySelector('#estilo4')
estilo4.style.color = 'orange'
 */

//adicionar elemento no html pelo js
/* let div = document.createElement('div')
div.style.color = 'red'
div.innerHTML = 'ola'
document.body.append(div)

let ul = document.querySelector('#ul1')
let li = document.createElement('li')
li.innerText = 'testando'
ul.appendChild(li) */

/* let lista = ['sao paulo','vasco', 'flamengo']

let ul = document.querySelector('.listaUL')
let times = document.createElement('li')
times.innerText = lista
times.style.background = 'blue'
ul.appendChild(times) */

let list = ['sao paulo','vasco', 'flamengo']

let times = document.querySelector('.listaul')

for(fila = 0; fila < list.length; fila++){
    let time = list[fila]
    let grupo = document.createElement('li')
    grupo.innerText = time
    grupo.style.border = '1px solid red'
    times.appendChild(grupo)
}