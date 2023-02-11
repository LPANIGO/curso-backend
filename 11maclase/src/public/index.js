const socket = io();//ya se importó io antes del link a este js en el html.
const chatbox = document.getElementById('chatbox');

chatbox.addEventListener('keyup',(evt)=> {
    if (evt.key === 'Enter'){
        socket.emit('message', chatbox.value);
        chatbox.value="";
    }
})
socket.emit('saludo', {
    user: "Mark",
    message: "Hola"
});

socket.on('Pokemons', data=> {
    console.log(data);
})

socket.on('log', data=>{
    console.log(data)
})