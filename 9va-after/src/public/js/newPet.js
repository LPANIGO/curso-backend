console.log('Testing newPet...')

const petForm = document.getElementById('petForm');
console.log(petForm);

petForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(petForm); //una version tipo objeto de los datos del form que le pase por parámetro.
    console.log(formData);

    fetch('/api/pets', {
        method: 'POST',
        body: formData
        // headers: { //como el fromDate ya tiene implicito su Content - Type, no hace falta agregarlo.
        //     'Content - Type': 'application/json'
        // }
        
    }).then(result=>result.json()).then(json=>console.log(json));
})