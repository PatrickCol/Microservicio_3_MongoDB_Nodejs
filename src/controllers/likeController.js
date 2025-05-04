import Like from '../models/Like.js';

export async function getAllLikes(req, res) {
  try {
    const likes = await find();
    res.json(likes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getLikeById(req, res) {
  try {
    const like = await Like.findOne({ id_like: Number(req.params.id) });
    if (!like) return res.status(404).json({ error: 'Like no encontrado' });
    res.json(like);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createLike(req, res) {
  try {
    const nuevo = new Like(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function updateLike(req, res) {
  try {
    const like = await Like.findOneAndUpdate(
      {id_like: Number(req.params.id)}, 
      req.body, 
      { new: true });
    if (!like) return res.status(404).json({ error: 'Like no encontrado' });
    res.json(like);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function deleteLike(req, res) {
  try {
    const result = await Like.findOneAndDelete(
      { id_like: Number(req.params.id) });
    if (!result) return res.status(404).json({ error: 'Like no encontrado' });
    res.json({ mensaje: 'Like eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
