//Asociado al patrón factory

const persistence = "MEMORY";
let productsService;

switch(persistence) {
    case "MEMORY":
        //import dinamico:
        const {default:MemProd} = await import('./MemoryDAO/Product.js'); 
        //Es una deconstruccion del valor exportado por default de un memory products

        productsService = new MemProd();
        break;
    case "MONGO":
        const {default:MongoProd} = await import('./MongoDAO/Products.js');
        productsService = new MongoProd();
        break;
}
const services = {
    productsService
}

export default services;

//tmb puedo hacer export productsService si quiero exportar uno a uno.