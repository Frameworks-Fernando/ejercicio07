const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },     // 1. Título
  artist: { type: String, required: true },    // 2. Artista
  album: { type: String, default: 'Single' },  // 3. Álbum
  duration: String,                            // 4. Duración (ej: "3:45")
  genre: String,                               // 5. Género
  coverUrl: String                             // 6. URL de la carátula
});

module.exports = mongoose.model('Song', songSchema);