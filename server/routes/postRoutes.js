const {Router} = require('express')
const {deletePost, editPost, getUserPosts, getPost, getPosts, createPost} = require('../controllers/postControllers')
const authMiddleware = require('../middleware/authMiddlewaare')

const router = Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.get('/', getPosts)
router.get('/users/:id', getUserPosts)
router.patch('/:id',authMiddleware, editPost)
router.delete('/:id',authMiddleware, deletePost)


module.exports = router