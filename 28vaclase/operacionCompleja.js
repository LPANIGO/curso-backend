process.on('message', info => { //este child recibe su mensaje pero debe reponder con un emit. Es comunicacion entre diferentes hilos.
    console.log("entro")
    let suma = 0
    for(let i = 0; i<5e9;i++){
        suma += i
    }
    process.send(suma);
})
    



