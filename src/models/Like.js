import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const likeSchema = new Schema({
  id_review: { type: Number, required: true },
  id_user: { type: Number, required: true },
  date: { type: Date, default: Date.now }
}, { versionKey: false }); // Esto elimina "__v"

// Plugin para autoincrementar id_like
likeSchema.plugin(AutoIncrement, { inc_field: 'id_like' });

// Ocultar _id en las respuestas JSON
likeSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret._id;
    return ret;
  }
});

export default model('Like', likeSchema);
