const Song = require('../db/models/Song');

const saveSong = async (data) => {
  return await Song.create(data);
};

const getAllSongs = async () => {
  return await Song.find();
};

module.exports = { saveSong, getAllSongs };