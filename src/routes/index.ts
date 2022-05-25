import {Router} from 'express';
const router = Router();

import { getUsers, getUserById, createUser} from '../controllers/index.controller';


router.get('/', (req,res)=>res.send('Hola mundo?'));

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);

export default router; 