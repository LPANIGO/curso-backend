import {Router} from 'express';

const router = Router();

let users = [  //aqui habria un getAll() de usersManager.
    {name:"Leandro", last_name:"Panigo"},
    {name:"Luca", last_name:"Changreta"}
]

router.get('/', (req, res) => {
    //Enviar usuarios. No muestra una vista
    res.send(users);
});

export default router;