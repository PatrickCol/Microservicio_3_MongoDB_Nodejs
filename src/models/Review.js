import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const reviewSchema = new Schema({
  id_user: { type: Number, required: true },
  id_book: { type: Number, required: true },
  comment: { type: String, required: true },
  punctuation: { type: Number, min: 1, max: 5, required: true },
  date: { type: Date, default: Date.now }
}, { versionKey: false }); // Elimina __v automáticamente

reviewSchema.plugin(AutoIncrement, { inc_field: 'id_review' });

reviewSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret._id;
    return ret;
  }
});

export default model('Review', reviewSchema);