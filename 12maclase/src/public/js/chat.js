console.log("prueba")
const socket = io({
    autoConnect: false
})

let username;
const chatBox = document.getElementById('chatBox');

Swal.fire({
    title: "Identifícate",
    input: "text",
    text: "Ingresa el usuario con el que te identificaras en el chat.",
    inputValidator: (value) => {
        return !value && "Necesitas identificarte para porder continuar <:|"
    },
    allowOutsideClick: false,
    allowEscapeKey: false
}).then(result=>{
    username = result.value;
    console.log(username)
    socket.connect();
})

/* listeners */

chatBox.addEventListener('keyup', evt=> {
    if (evt.key==="Enter"){
        
        if(chatBox.value.trim().length>0){
            socket.emit('message', {user:username, message:chatBox.value});
            chatBox.value="";
        }
    }
})

/* listeners */

socket.on('log', data=> {
    //lo hago con  mensaje plano pero podria hacerlo con divs -Hacer como desafio personal-
    let log = document.getElementById('log');
    let messages = "";
    data.forEach(message=>{
        messages = messages +`${message.user} dice: ${message.message}`
    })
    log.innerHTML = messages;
})

//reto personal: pasar a modelo de divs

socket.on('newUser', data=> {
    if(username){
        Swal.fire({
            text:"Ingresó al chat.",
            toast:true,
            position: "top-right"
        })
    }
})