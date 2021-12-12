const models = require('../database/models');

const createAlbum = async (req, res) => {
  try {
    const music = await models.Music.create(req.body);
    return res.status(201).json({
	    music
    });

  } catch(error) {
    return res.status(500).json({ error: error.message }); 
  }
};

const getAllAlbums = async (req, res) => {
  console.log('getting albums');
  try {
    const albums = await models.Music.findAll ({
      include: []
    });
    return res.status(200).json({albums});
  } catch (error) {
    return res.status(500).send(error.message);
  }
}; 

module.exports = {
  createAlbum,
  getAllAlbums
}