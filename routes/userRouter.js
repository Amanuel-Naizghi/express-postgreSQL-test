const {Router} = require('express');
const router = Router();
const userController = require('../controllers/userController');

router.get('/',userController.getUsernames);
router.get('/new',userController.createUsernameGet);
router.post('/new',userController.createUsernamePost);
router.get('/search',userController.getSearchItem);
router.get('/delete',userController.deleteAllUsers);


module.exports = router;