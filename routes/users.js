import express from 'express';


import { createUser } from '../controllers/users.js';
import { getUsers, getUser, updateUser, deleteUser} from '../controllers/users.js';
const router = express.Router();



router.get('/', getUsers);
router.post('/',createUser);
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router;