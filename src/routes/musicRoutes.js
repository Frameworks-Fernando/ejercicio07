const express = require('express');
const router = express.Router();
const service = require('../services/musicService');

// POST para agregar una canción nueva
router.post('/', async (req, res) => {
  try {
    const nuevaCancion = await service.saveSong(req.body);
    res.status(201).json(nuevaCancion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET para obtener todas las canciones
router.get('/', async (req, res) => {
  const canciones = await service.getAllSongs();
  res.json(canciones);
});

module.exports = router;