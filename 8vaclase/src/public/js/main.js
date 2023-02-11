let petForm = document.getElementById("petForm");

const handleSubmit = (evt,form,route) => {
    evt.preventDefault();
    let formData = new FormData(form);
    let obj = {};
    formData.forEach( (value,key) => obj[key] = value);

    fetch(route,{
        method: "POST",
        body: formData
    })

    /*
    //fetch para solo el nombre y especie:
    fetch(route, {          //fetch permite conectar con el backend
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"aplication/json"
    }
    }).then(res=>res.json()).then(json=>console.log(json));
    */
}

petForm.addEventListener('submit', (e)=>handleSubmit(e,e.target,'/pets'));