import {Router} from 'express';

const router = Router();

let users = [  //aqui habria un getAll() de usersManager.
    {name:"Leandro", last_name:"Panigo"},
    {name:"Luca", last_name:"Changreta"}
]

router.get('/', (req, res) => {
    res.render('welcome', {})
});

//Mostrar usuarios
router.get('/users', (req, res) => {
    //res.render('users', {users});
    res.render('users',{
        hasUsers: users.length>0,
        users
    });
})

export default router;