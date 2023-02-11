console.log('Hola handlebars users')

fetch('api/users').then(res=>res.json()).then(json=>console.log(json));