// Chamando as saídas 
let h = document.getElementById('h')
let m = document.getElementById('m')
let s = document.getElementById('s')

// SetInterval
setInterval(function(){
    // Data Atual
    let data = new Date()

    // Hora
    let hora = String(data.getHours()).padStart(2, '0')
    h.innerText = (hora)

    // Minutos
    let minutos = String(data.getMinutes()).padStart(2, '0')
    m.innerText = (minutos)

    // Segundos
    let segundos = String(data.getSeconds()).padStart(2, '0') 
    s.innerText = (segundos)
}, 1000)