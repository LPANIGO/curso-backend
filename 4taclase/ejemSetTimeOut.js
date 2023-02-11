//Lo siguiente es mas utilizado en front:

//Set timeout
setTimeout(() => {
    console.log("Timeout 5000 ms")
}, 5000);


//Set interval; cada dos segundos me va a mandar el mensaje.
let contador = 0;
let timer = setInterval(() => {
    console.log("Interval 2000 ms")
    contador++
    if (contador===5) {
        clearInterval(timer)
        console.log("Interval finalizado.")
    }
}, 2000)

//Los conceptos anteriores son mejores para front
//------------------------------

