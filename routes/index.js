const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Api about albums I like it'));

router.post('/album', controllers.createAlbum);
router.get('/album', controllers.getAllAlbums);

module.exports = router;