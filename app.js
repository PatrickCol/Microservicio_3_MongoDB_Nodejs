import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';

import reviewRoutes from './src/routes/reviewRoutes.js';
import likeRoutes from './src/routes/likeRoutes.js';

config();
const app = express();

app.use(json());

app.use('/reviews', reviewRoutes);
app.use('/likes', likeRoutes);

connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
