const {Router} = require('express')
const {registerUser, loginUser, getUser, editUser, changeAvatar, getUsers} = require('../controllers/userControllers')
const authmiddleware = require('../middleware/authMiddlewaare')
const router = Router()

router.post('/register', registerUser )
router.post('/login', loginUser)
router.get('/:id', getUser)
router.get('/', getUsers)
router.post('/change-avatar',authmiddleware, changeAvatar)
router.patch('/edit-user',authmiddleware, editUser)


module.exports = router