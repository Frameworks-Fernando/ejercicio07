const express = require('express');
const mongoose = require('mongoose');
const musicRoutes = require('./routes/musicRoutes'); // Adaptado de la pág. 33

const app = express();
app.use(express.json()); // Requerido para procesar JSON

// Conexión a MongoDB siguiendo las pautas de las páginas 10-21
mongoose.connect('mongodb://localhost:27017/maybach_db')
  .then(() => console.log('✅ MongoDB Conectado'))
  .catch(err => console.log('❌ Error:', err));

// Uso de rutas según el desafío final
app.use('/api/songs', musicRoutes);

app.listen(3000, () => {
  console.log('🚀 Servidor en puerto 3000');
});