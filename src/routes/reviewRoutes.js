import { Router } from 'express';
const router = Router();
import { getAllReviews, getReviewById, createReview, updateReview, deleteReview } from '../controllers/reviewController.js';

router.get('/', getAllReviews);
router.get('/:id', getReviewById);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;
