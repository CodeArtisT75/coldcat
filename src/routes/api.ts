import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'ColdCat server is working',
  });
});

module.exports = router;
