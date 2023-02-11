const template = Handlebars.compile(`<ul>  
<li>{{name}}</li>
<li>{{lastname}}</li>
<li>{{age}}</li>
<li>{{mail}}</li>
<li>{{phone}}</li>
</ul>`)     //compila la plantilla

const htmlFinal = template({ //general el html
    name: "Alfonso",
    lastname: "Alfonsin",
    age: "28",
    mail: "alfonso@correoso.com",
    phone: "123123123"
})

document.getElementById('data').innerHTML = htmlFinal; //inyecta el resultado en la vista