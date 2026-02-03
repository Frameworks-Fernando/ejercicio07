const mongoose = require('mongoose');

// URL de conexión (el 27017 es el puerto que pusimos en Docker)
const url = 'mongodb://localhost:27017/mi_base_de_datos';

mongoose.connect(url)
  .then(() => console.log('🚀 ¡Conexión exitosa a MongoDB desde Node!'))
  .catch(err => console.error('❌ Error al conectar:', err));