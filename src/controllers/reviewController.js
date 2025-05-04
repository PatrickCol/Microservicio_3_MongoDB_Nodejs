import Review from '../models/Review.js';

export async function getAllReviews(req, res) {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getReviewById(req, res) {
  try {
    const review = await Review.findOne({ id_review: Number(req.params.id) });
    if (!review) return res.status(404).json({ error: 'Review no encontrada' });
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createReview(req, res) {
  try {
    const nueva = new Review(req.body);
    await nueva.save();
    res.status(201).json(nueva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function updateReview(req, res) {
  try {
    const review = await Review.findOneAndUpdate(
      { id_review: Number(req.params.id) },
       req.body, 
       { new: true });
    if (!review) return res.status(404).json({ error: 'Review no encontrada' });
    res.json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function deleteReview(req, res) {
  try {
    const result = await Review.findOneAndDelete(
      { id_review: Number(req.params.id) });
    if (!result) return res.status(404).json({ error: 'Review no encontrada' });
    res.json({ mensaje: 'Review eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
