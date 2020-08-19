import { Router, Request, Response } from 'express';

import { User } from '../models/User';
import { AuthRouter, requireAuth } from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/', async (req: Request, res: Response) => {
    console.log('/users')
    res.send(`list of users`);
});

router.get('/:id', async (req: Request, res: Response) => {
    let { id } = req.params;
    console.log(`AUG18 - getting user ${id}`)
    const item = await User.findByPk(id);
    res.send(item);
});

export const UserRouter: Router = router;