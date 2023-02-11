import {Router} from 'express';
import Users from '../dao/Memory/Users.memory.js';
const router = Router();

const usersService = new Users();
router.get('/', async (req, res) => {
    let result = await usersService.getAll();
    res.send(result);
});
router.get('/mock', async(req,res) => {
    let result = await usersService.populate();
    res.send(result);
})
export default router;