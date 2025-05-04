import { Router } from 'express';
const router = Router();
import { getAllLikes, getLikeById, createLike, updateLike, deleteLike } from '../controllers/likeController.js';

router.get('/', getAllLikes);
router.get('/:id', getLikeById);
router.post('/', createLike);
router.put('/:id', updateLike);
router.delete('/:id', deleteLike);

export default router;
